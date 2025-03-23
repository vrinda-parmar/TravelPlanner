import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { jsPDF } from "jspdf";

const TravelPlanner = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleGenerateSchedule = async () => {
    if (!prompt.trim()) return alert("Please enter a prompt!");

    setIsLoading(true);
    setResponse(null);

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const aiResponse = result.response.text();

      const formattedResponse = aiResponse.split("\n").filter(line => line.trim()).map(line => ({ text: line }));

      setResponse(formattedResponse);
      setShowModal(true);
    } catch (error) {
      console.error("Error generating schedule:", error);
      alert("Failed to generate schedule. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    let yPos = 30;
    const pageHeight = doc.internal.pageSize.height;
    const pageWidth = doc.internal.pageSize.width;
    const margin = 10;
    const contentWidth = pageWidth - margin * 2;
    const lineHeight = 8; // Adjust this for line spacing
  
    const dayColors = [
      [0, 102, 204],
      [34, 139, 34],
      [255, 140, 0],
      [128, 0, 128],
      [220, 20, 60],
    ];
    let dayIndex = 0;
  
    // Set Background Color
    doc.setFillColor(230, 247, 255);
    doc.rect(0, 0, pageWidth, pageHeight, "F");
  
    // Title with Enhanced Style
    doc.setFontSize(24);
    doc.setTextColor(0, 102, 204);
    doc.setFont("helvetica", "bold");
    doc.text("Travel Itinerary", margin, 15);
  
    // Subtitle with Different Color
    doc.setFontSize(14);
    doc.setTextColor(34, 139, 34);
    doc.text("Your personalized travel schedule", margin, 22);
  
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
  
    response.forEach((item) => {
      if (yPos + 10 > pageHeight - 20) {
        doc.addPage();
        yPos = 20;
        doc.setFillColor(230, 247, 255);
        doc.rect(0, 0, pageWidth, pageHeight, "F");
      }
  
      if (item.text.toLowerCase().includes("day")) {
        doc.setFontSize(16);
        doc.setTextColor(...dayColors[dayIndex % dayColors.length]);
        doc.setFont("helvetica", "bold");
        doc.text(item.text, margin, yPos);
        dayIndex++;
        yPos += 12; // Larger gap for days
      } else {
        const splitText = doc.splitTextToSize(`• ${item.text}`, contentWidth);
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.setFont("helvetica", "normal");
        splitText.forEach((line) => {
          if (yPos + lineHeight > pageHeight - 20) {
            doc.addPage();
            yPos = 20;
            doc.setFillColor(230, 247, 255);
            doc.rect(0, 0, pageWidth, pageHeight, "F");
          }
          doc.text(line, margin, yPos);
          yPos += lineHeight; // Consistent line spacing
        });
        yPos += 4; // Additional space between blocks
      }
    });
  
    // Add Page Numbers
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(10);
      doc.setTextColor(150, 150, 150);
      doc.text(`Page ${i} of ${pageCount}`, pageWidth - 30, pageHeight - 10);
    }
  
    doc.save("itinerary.pdf");
  };
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 text-white p-4">
      <h1 className="text-3xl font-bold mb-6">Travel Itinerary Planner</h1>
      <textarea
        className="w-full max-w-lg p-4 mb-4 border rounded-lg bg-gray-200 text-black placeholder-gray-700 focus:ring focus:ring-blue-500 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_10px_40px_rgba(59,130,246,0.6)] transform transition-transform duration-200 hover:scale-100"
        rows="5"
        placeholder="Describe your trip preferences (e.g., 'Plan a 5-day trip to Goa with beach activities.')"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <button
        onClick={handleGenerateSchedule}
        disabled={isLoading}
        className="bg-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-950 disabled:opacity-50"
      >
        {isLoading ? "Generating..." : "Generate Schedule"}
      </button>

      {showModal && response && (
        <div className="fixed inset-0  bg-opacity-60 flex items-center justify-center background-image bg-cover bg-center " style={{ backgroundImage: "url('/switzer.jpg')" }}> 
          <div className="bg-white p-6 rounded-lg max-w-lg w-full">
            <h2 className="text-xl font-semibold mb-4">Generated Schedule</h2>
            <div className="overflow-y-auto max-h-80 p-4 bg-blue-100 text-black rounded-lg">
              {response.map((item, index) => (
                <p key={index}>{`• ${item.text}`}</p>
              ))}
            </div>
            <div className="mt-4 flex justify-end space-x-4">
              <button onClick={handleDownloadPDF} className="bg-green-800 px-4 py-2 rounded-lg">Download PDF</button>
              <button onClick={() => setShowModal(false)} className="bg-gray-900 px-4 py-2 rounded-lg">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TravelPlanner;
