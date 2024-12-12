// Pre-prompts the AI with some HR-related questions and special responses
const hrPrompts = {
    "What is employee engagement?": "Employee engagement refers to the emotional commitment employees have toward their organization. It influences how much effort they put into their work.",
    "How can we improve team collaboration?": "To improve team collaboration, it's important to foster open communication, establish clear goals, and encourage team-building activities.",
    "What are the steps for performance management?": "Performance management typically involves setting clear expectations, regular feedback, evaluations, and setting development goals for employees.",
    "What strategies can be used to retain top talent?": "Strategies for retaining top talent include offering competitive compensation, providing growth opportunities, fostering a positive work culture, and recognizing employee achievements.",
    "How do you handle conflict in the workplace?": "Handling conflict in the workplace requires active listening, understanding different perspectives, facilitating discussions, and finding a mutually agreeable solution."
  };
  
  // Special responses
  const specialResponses = {
    "I": "Hi, how's your day going?"
  };
  
  // Display AI response for HR-related questions or special responses
  function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    if (userInput !== "") {
      const chatArea = document.getElementById("chatArea");
  
      // Add user message to chat area
      const userMessage = document.createElement("p");
      userMessage.textContent = "You: " + userInput;
      chatArea.appendChild(userMessage);
  
      // Check for special responses or HR-related prompts
      let aiResponse = "AI: I'm not sure how to answer that right now.";
      if (specialResponses[userInput]) {
        aiResponse = `AI: ${specialResponses[userInput]}`;
      } else if (hrPrompts[userInput]) {
        aiResponse = `AI: ${hrPrompts[userInput]}`;
      }
  
      const aiMessage = document.createElement("p");
      aiMessage.textContent = aiResponse;
      chatArea.appendChild(aiMessage);
  
      // Scroll to the bottom
      chatArea.scrollTop = chatArea.scrollHeight;
  
      // Clear input field
      document.getElementById("userInput").value = "";
    }
  }
  