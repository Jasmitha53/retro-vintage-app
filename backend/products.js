const express = require('express');
const router = express.Router();

const mockProducts = [
 
  { id: 1, name: "Royal Kanchipuram Pattu", price: 350.00, imageUrl: "https://i.pinimg.com/736x/e9/46/1d/e9461da74c41dfb92e4eefc316d485c2.jpg", category: "pattu-sarees", fabric: "Pure Silk", color: "Maroon & Gold", texture: "Rich Weave", description: "A majestic Kanchipuram Pattu saree, perfect for weddings and grand celebrations. Features traditional temple borders." },
  { id: 2, name: "Elegant Mysore Silk Pattu", price: 280.00, imageUrl: "https://i.pinimg.com/736x/9f/88/98/9f88985080fb87a0df544458d16b3f0b.jpg", category: "pattu-sarees", fabric: "Mysore Silk", color: "Royal Blue", texture: "Smooth & Lustrous", description: "A classic Mysore silk saree known for its minimalist design and radiant sheen. An epitome of grace." },

  { 
    id: 25, 
    name: "Rose Pink Banarasi Pattu", 
    price: 320.00, 
    imageUrl: "https://i.pinimg.com/736x/5c/d7/51/5cd751d696f63ecbc89bdcfa1653725f.jpg", 
    category: "pattu-sarees", 
    fabric: "Banarasi Silk", 
    color: "Rose Pink", 
    texture: "Intricate Brocade", 
    description: "A stunning Banarasi Pattu saree in a delicate rose pink hue, adorned with intricate silver Zari work. A symbol of timeless beauty." 
  },
  { 
    id: 26, 
    name: "Sunshine Yellow Dharmavaram Pattu", 
    price: 295.00, 
    imageUrl: "https://i.pinimg.com/736x/19/c8/21/19c821d8bb88c41d11adafba2d32a9ec.jpg", 
    category: "pattu-sarees", 
    fabric: "Dharmavaram Silk", 
    color: "Sunshine Yellow", 
    texture: "Double Weave", 
    description: "A radiant Dharmavaram Pattu saree in a vibrant sunshine yellow. Known for its durability and rich double-sided weave, making it reversible." 
  },
  

  { id: 3, name: "Classic Jamdani Cotton", price: 95.00, imageUrl: "https://placehold.co/400x500/F5F5DC/333333?text=Cotton+Saree", category: "cotton-sarees", fabric: "Muslin Cotton", color: "Ivory White", texture: "Light & Airy", description: "Handwoven Jamdani saree from Bengal, featuring intricate floral motifs. Incredibly soft and comfortable." },
  { id: 4, name: "South Cotton Chettinad", price: 75.00, imageUrl: "https://placehold.co/400x500/FFC300/333333?text=Cotton+Saree", category: "cotton-sarees", fabric: "Chettinad Cotton", color: "Mustard & Black", texture: "Crisp", description: "A vibrant Chettinad cotton saree with bold checks and contrasting borders. Perfect for a striking everyday look." },
  { id: 5, name: "Pastel Dream Half Saree", price: 150.00, imageUrl: "https://placehold.co/400x500/DDA0DD/333333?text=Half+Saree", category: "half-sarees", fabric: "Georgette & Net", color: "Pastel Pink & Mint", texture: "Flowy", description: "A modern take on the traditional half saree, with delicate embroidery and a flowing silhouette." },
  { id: 6, name: "Brocade Festive Half Saree", price: 180.00, imageUrl: "https://placehold.co/400x500/228B22/FFFFFF?text=Half+Saree", category: "half-sarees", fabric: "Brocade Silk", color: "Green & Magenta", texture: "Rich", description: "A rich brocade half saree set designed for festivals and special occasions." },
  { id: 15, name: "Vibrant Peacock Half Saree", price: 165.00, imageUrl: "https://placehold.co/400x500/008080/FFFFFF?text=Peacock+Half+Saree", category: "half-sarees", fabric: "Art Silk", color: "Teal & Gold", texture: "Glossy", description: "A stunning half saree inspired by the majestic peacock, featuring vibrant colors and intricate threadwork." },
  { id: 16, name: "Sunset Ombre Half Saree", price: 140.00, imageUrl: "https://placehold.co/400x500/FF7F50/FFFFFF?text=Ombre+Half+Saree", category: "half-sarees", fabric: "Chiffon", color: "Orange & Pink Ombre", texture: "Lightweight", description: "A beautiful chiffon half saree with a gradual sunset ombre effect, perfect for evening functions." },
  { id: 17, name: "Ivory & Gold Classic Half Saree", price: 190.00, imageUrl: "https://placehold.co/400x500/FFFFF0/333333?text=Ivory+Half+Saree", category: "half-sarees", fabric: "Kerala Cotton", color: "Ivory & Gold", texture: "Soft", description: "An epitome of elegance, this Kerala cotton half saree with a thick gold border is timeless." },
  { id: 18, name: "Modern Geometric Print Half Saree", price: 115.00, imageUrl: "https://placehold.co/400x500/4682B4/FFFFFF?text=Geometric+Half+Saree", category: "half-sarees", fabric: "Crepe", color: "Steel Blue & White", texture: "Smooth", description: "A contemporary take on a classic, this crepe half saree features a bold geometric print." },
  { id: 19, name: "Lavender Garden Half Saree", price: 130.00, imageUrl: "https://placehold.co/400x500/E6E6FA/333333?text=Lavender+Half+Saree", category: "half-sarees", fabric: "Organza", color: "Lavender", texture: "Sheer", description: "A dreamy organza half saree in a soft lavender shade with delicate floral embroidery." },
  { id: 20, name: "Deep Maroon Velvet Half Saree", price: 210.00, imageUrl: "https://placehold.co/400x500/800000/FFFFFF?text=Velvet+Half+Saree", category: "half-sarees", fabric: "Velvet", color: "Deep Maroon", texture: "Plush", description: "A luxurious velvet half saree perfect for winter weddings, offering a rich and royal look." },
  { id: 21, name: "Patola Print Half Saree", price: 175.00, imageUrl: "https://placehold.co/400x500/FFD700/333333?text=Patola+Half+Saree", category: "half-sarees", fabric: "Silk Blend", color: "Multi-color", texture: "Silky", description: "Vibrant and celebratory, this half saree features the famous Patola print from Gujarat." },
  { id: 22, name: "Simple Zari Border Half Saree", price: 90.00, imageUrl: "https://placehold.co/400x500/2E8B57/FFFFFF?text=Zari+Border+Half+Saree", category: "half-sarees", fabric: "Cotton Silk", color: "Sea Green", texture: "Crisp", description: "A simple yet elegant half saree with a contrasting Zari border, ideal for subtle grace." },
  { id: 23, name: "Black & Gold Sequin Half Saree", price: 195.00, imageUrl: "https://placehold.co/400x500/000000/FFFFFF?text=Sequin+Half+Saree", category: "half-sarees", fabric: "Georgette", color: "Black & Gold", texture: "Sparkly", description: "Get ready to dazzle in this glamorous black georgette half saree with all-over gold sequin work." },
  { id: 24, name: "Mustard Yellow Haldi Special", price: 125.00, imageUrl: "https://placehold.co/400x500/FFDB58/333333?text=Haldi+Half+Saree", category: "half-sarees", fabric: "Cotton", color: "Mustard Yellow", texture: "Comfortable", description: "The perfect outfit for a Haldi ceremony, this bright and cheerful half saree is a must-have." },
  { id: 7, name: "Vintage Floral Maxi Dress", price: 120.00, imageUrl: "https://placehold.co/400x500/008080/FFFFFF?text=Dress", category: "dresses", fabric: "Rayon", color: "Teal Floral", texture: "Soft & Flowy", description: "A beautiful full-length maxi dress with a vintage floral print and a comfortable, flattering fit." },
  { id: 8, name: "Hand-Block Print Kurti Top", price: 55.00, imageUrl: "https://placehold.co/400x500/4B0082/FFFFFF?text=Top", category: "tops", fabric: "Cotton", color: "Indigo Blue", texture: "Soft", description: "A stylish Kurti top featuring traditional hand-block printing. Pairs wonderfully with palazzos or jeans." },
  { id: 9, name: "Retro A-Line Frock", price: 85.00, imageUrl: "https://placehold.co/400x500/DC143C/FFFFFF?text=Frock", category: "frocks", fabric: "Linen Blend", color: "Red Polka Dot", texture: "Structured", description: "A charming knee-length frock with a classic A-line cut and playful polka dots. Includes a waist tie." },
  { id: 10, name: "Royal Anarkali Suit", price: 220.00, imageUrl: "https://placehold.co/400x500/006400/FFFFFF?text=Anarkali", category: "anarkali-suits", fabric: "Chanderi Silk", color: "Emerald Green", texture: "Sheer & Elegant", description: "A floor-length Anarkali suit with exquisite Zari work on the yoke and sleeves. Comes with a matching dupatta." },
  { id: 11, name: "Jaipuri Print Anarkali", price: 160.00, imageUrl: "https://placehold.co/400x500/FF4500/FFFFFF?text=Anarkali", category: "anarkali-suits", fabric: "Cotton", color: "Multi-color Print", texture: "Comfortable", description: "A vibrant and comfortable cotton Anarkali featuring a traditional Jaipuri block print." },
  { id: 12, name: "Chic Linen Co-ord Set", price: 110.00, imageUrl: "https://placehold.co/400x500/D2B48C/333333?text=Co-ord+Set", category: "co-ord-sets", fabric: "Linen", color: "Beige", texture: "Breathable", description: "A chic and comfortable linen co-ord set with a relaxed-fit top and wide-leg pants." },
  
  // Lehengas
  { 
    id: 13, 
    name: "Pastel Floral Lehenga", 
    price: 450.00, 
    imageUrl: "https://placehold.co/400x500/FFB6C1/333333?text=Lehenga", 
    category: "lehengas", 
    fabric: "Organza", 
    color: "Blush Pink", 
    texture: "Light & Ethereal", 
    description: "A breathtaking organza lehenga with delicate floral embroidery, perfect for sangeet or reception events." 
  },
  { 
    id: 14, 
    name: "Bandhani Print Lehenga", 
    price: 380.00, 
    imageUrl: "https://placehold.co/400x500/FFFF00/333333?text=Lehenga", 
    category: "lehengas", 
    fabric: "Georgette", 
    color: "Bright Yellow", 
    texture: "Flowy", 
    description: "A stunning and festive lehenga featuring a traditional Bandhani print, complete with mirror work." 
  }
];

router.get('/', (req, res) => { res.json(mockProducts); });
router.get('/category/:categoryName', (req, res) => {
  const { categoryName } = req.params;
  const filteredProducts = mockProducts.filter(
    (product) => product.category.toLowerCase() === categoryName.toLowerCase()
  );
  res.json(filteredProducts);
});
router.get('/:id', (req, res) => {
  const product = mockProducts.find(p => p.id === parseInt(req.params.id));
  if (!product) { return res.status(404).json({ msg: 'Product not found' }); }
  res.json(product);
});

module.exports = router;