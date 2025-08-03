import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatBotProps {
  className?: string;
}

export default function ChatBot({ className = "" }: ChatBotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Hi! I'm Nandu's AI assistant. Ask me anything about his background, projects, or skills!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simple AI responses based on keywords
  const generateResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    // About/Background
    if (
      message.includes("about") ||
      message.includes("who") ||
      message.includes("background")
    ) {
      return "Nandu Rajesh is an AI/ML Engineer from Kerala, India, currently pursuing B.Tech in Artificial Intelligence with a CGPA of 9.71. He specializes in computer vision, robotics, and deep learning applications.";
    }

    // Education
    if (
      message.includes("education") ||
      message.includes("study") ||
      message.includes("college") ||
      message.includes("cgpa")
    ) {
      return "Nandu is pursuing B.Tech in Artificial Intelligence at Sree Chitra Thirunal College of Engineering with an impressive CGPA of 9.71. He's expected to graduate in 2026.";
    }

    // Experience
    if (
      message.includes("experience") ||
      message.includes("work") ||
      message.includes("job") ||
      message.includes("internship")
    ) {
      return "Nandu is currently working as an R&D Intern at Enproducts, where he develops cutting-edge AI solutions for industrial automation. He has hands-on experience with computer vision, robotics, and deep learning projects.";
    }

    // Skills/Technologies
    if (
      message.includes("skills") ||
      message.includes("technology") ||
      message.includes("programming") ||
      message.includes("languages")
    ) {
      return "Nandu's technical skills include Python, YOLOv8, Computer Vision, OpenCV, ROS2, Deep Learning, Machine Learning, Jetson Nano development, Django, React, and various AI/ML frameworks.";
    }

    // Projects
    if (
      message.includes("project") ||
      message.includes("portfolio") ||
      message.includes("work")
    ) {
      return "Nandu has worked on several impressive projects including an Autonomous Industrial AGV Cart using ROS2 and YOLO, AI Jewelry Stock Measurement System with YOLOv8, Big Fuse Detector for EV Units, and SnapFlow - an AI Event Photography Management system.";
    }

    // AGV/Robotics
    if (
      message.includes("agv") ||
      message.includes("robot") ||
      message.includes("autonomous") ||
      message.includes("cart")
    ) {
      return "The Autonomous Industrial AGV Cart is one of Nandu's flagship projects. It's a self-navigating cart for industrial automation using ROS2, YOLO, Jetson Orin Nano, and advanced computer vision algorithms for parts transportation.";
    }

    // Computer Vision
    if (
      message.includes("computer vision") ||
      message.includes("vision") ||
      message.includes("yolo") ||
      message.includes("opencv")
    ) {
      return "Nandu specializes in computer vision applications, particularly using YOLOv8 for object detection, OpenCV for image processing, and has developed systems for jewelry measurement, fuse detection, and industrial automation.";
    }

    // Contact
    if (
      message.includes("contact") ||
      message.includes("email") ||
      message.includes("reach") ||
      message.includes("hire")
    ) {
      return "You can reach Nandu at iamnandurajesh@gmail.com or call +91 7012749823. He's also available on LinkedIn (iammnandu) and GitHub (iammnandu). He's open to collaboration and job opportunities!";
    }

    // Location
    if (
      message.includes("location") ||
      message.includes("where") ||
      message.includes("kerala")
    ) {
      return "Nandu is based in Kerala, India. Kerala is known for its high literacy rate and strong technical education system, which has shaped his engineering background.";
    }

    // AI/ML specific
    if (
      message.includes("artificial intelligence") ||
      message.includes("machine learning") ||
      message.includes("deep learning") ||
      message.includes("ai") ||
      message.includes("ml")
    ) {
      return "Nandu specializes in AI/ML with focus on computer vision applications. He has experience with deep learning frameworks, neural networks, object detection models like YOLO, and deploying AI solutions on edge devices like Jetson Nano.";
    }

    // Default response
    const defaultResponses = [
      "That's an interesting question! Nandu has diverse experience in AI/ML. Could you be more specific about what you'd like to know?",
      "I'd be happy to help! You can ask me about Nandu's projects, education, skills, or experience. What interests you most?",
      "Great question! Feel free to ask about Nandu's background in AI/ML, his robotics projects, or his technical skills.",
    ];

    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(input),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-gradient-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          size="icon"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="w-80 h-96 bg-gradient-card border-0 shadow-xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              <span className="font-semibold text-foreground">
                Ask about Nandu
              </span>
            </div>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}
              >
                {message.isBot && (
                  <Bot className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isBot
                      ? "bg-accent text-accent-foreground"
                      : "bg-primary text-primary-foreground"
                  }`}
                >
                  {message.text}
                </div>
                {!message.isBot && (
                  <User className="h-6 w-6 text-muted-foreground mt-1 flex-shrink-0" />
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 justify-start">
                <Bot className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                <div className="bg-accent text-accent-foreground p-3 rounded-lg text-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                    <div
                      className="w-2 h-2 bg-current rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    />
                    <div
                      className="w-2 h-2 bg-current rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Nandu..."
                className="flex-1 text-sm"
              />
              <Button
                onClick={handleSend}
                size="icon"
                className="h-10 w-10"
                disabled={!input.trim() || isTyping}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
