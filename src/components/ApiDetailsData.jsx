const apiContent = {
    items: {
        name:"Items Endpoint",
        provider:"like zomato and swiggy",
      title: "Food Items API",
      description: "This API provides detailed information about food items including rating, currency, prices, and is_Veg, discount. This items api is a replica of swiggy and zomato api not same but you can feel it to some extent how these api data looks.",
      example: ` 
      {
        "items_id": "1",
        "name": "Masala Papad",
        "currency": "INR",
        "delivery_charge": 15.0,
        "distance_km": 2.5,
        "price": 50.0,
        "rating": 4.0,
        "is_veg": true,
        "discount_percentage": 5,
        "description": "Crispy papad topped with spiced onions and tomatoes.",
        "image_url": "https://t.ly/LqSJ1",
        "provider": "Zomato"
      },
      {
        "items_id": "2",
        "name": "Aloo Chaat",
        "currency": "INR",
        "delivery_charge": 15.0,
        "distance_km": 1.8,
        "price": 80.0,
        "rating": 4.2,
        "is_veg": true,
        "discount_percentage": 10,
        "description": "Tangy and spicy fried potatoes tossed with chutneys.",
        "image_url": "https://t.ly/LqSJ1",
        "provider": "Zomato"
      },`,
    },
    instagramUsers: {
        name:"Social Media Endpoint",
        provider:"like instagram and twitter(X)",
        title: "Social Media API",
        description: "This API allows you to interact with social media data including user profiles, like and comments count, and also image_url. You can built social media apps by using this free api.",
        example: `
          {
            "user_id": "112",
            "name": "Lakshay Malhotra",
            "isFollow": false,
            "image_url": "https://t.ly/KL42X",
            "like_count": 320,
            "comments_count": 70
          },
          {
            "user_id": "113",
            "name": "Megha Agarwal",
            "isFollow": true,
            "image_url": "https://t.ly/KL42X",
            "like_count": 640,
            "comments_count": 145
          },`,
    },
    chatbotData: {
        name:"Train Chatbot Endpoint",
        provider:"casual chatbot data",
      title: "Chatbot Training API",
      description: "Use this API to train chatbots with custom data for natural language processing.",
      example: `
    {
        "input": "What's the funniest thing you've heard?",
        "response": "I hear a lot of jokes, but humor is subjective. Here's one: Why don't skeletons fight each other? They don't have the guts!"
    },
    {
        "input": "Can you recommend a good book?",
        "response": "Certainly! If you enjoy fiction, ‘To Kill a Mockingbird' is a great classic. What genres do you like?"
    },
    {
        "input": "What's the best way to make friends?",
        "response": "Being friendly, showing genuine interest in others, and participating in activities you enjoy are great ways to make friends. What's your approach?"
    },
    {
        "input": "What's your favorite holiday?",
        "response": "I don't celebrate holidays, but many people love Christmas for its festive spirit. What's your favorite holiday?"
    },
    {
        "input": "Do you enjoy movies or TV shows?",
        "response": "I don't watch movies or TV shows, but I can chat about them! What's a movie or show you'd recommend?"
    },`,
    },
    products: {
        name:"Products Endpoint",
        provider:"like amazon and flipcart",
      title: "Products API",
      description: "The Products API delivers information on a variety of products, including details such as price, category, and reviews.",
      example: `
      
      {
        "product_id": 148,
        "name": "Smart Water Bottle",
        "description": "Intelligent water bottle with hydration tracking and LED reminders.",
        "price": 69.99,
        "discount": 15,
        "category": "Health & Beauty",
        "product_image": "https://t.ly/tSt1x",
        "ratings": 4.4,
        "review_count": 80
      },
      {
        "product_id": 149,
        "name": "Electric Lawn Mower",
        "description": "Eco-friendly electric lawn mower with adjustable cutting height and easy maneuverability.",
        "price": 399.99,
        "discount": 100,
        "category": "Outdoor",
        "product_image": "https://t.ly/tSt1x",
        "ratings": 4.7,
        "review_count": 90
      },`,
    },
  };

export default apiContent;