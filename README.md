# 🌿 Jungle Run 2D Game

A thrilling endless runner game set in a lush jungle environment! Navigate through the forest, jump over obstacles, and see how far you can run!

## 🎮 Game Overview

Jungle Run is a browser-based 2D side-scrolling game where players control a character running through a jungle environment. The objective is to jump over tree trunk obstacles and achieve the highest score possible.

## ✨ Features

- **Endless Runner Gameplay**: Infinite scrolling jungle environment
- **Responsive Design**: Optimized for different screen sizes and devices
- **Smooth Animations**: Character running, jumping, and death animations
- **Sound Effects**: Immersive audio for running, jumping, and game over
- **Score System**: Points accumulate as you progress
- **Collision Detection**: Precise collision system for fair gameplay
- **Beautiful Graphics**: Hand-crafted sprite animations and forest background

## 🎯 How to Play

1. **Start the Game**: Press `Enter` to begin running
2. **Jump**: Press `Spacebar` to jump over obstacles
3. **Survive**: Avoid hitting the tree trunks while running
4. **Score**: Your score increases automatically as you progress
5. **Restart**: Click "Try Again" when the game ends

## 🎮 Controls

| Key | Action |
|-----|--------|
| `Enter` | Start/Resume the game |
| `Spacebar` | Jump over obstacles |

## 📁 Project Structure

```
Jungle Run 2D Game/
├── index.html          # Main HTML file
├── style.css           # Styling and responsive design
├── script.js           # Game logic and mechanics
├── Forest1.jpg         # Background image
├── My project-1.png    # Tree trunk obstacle sprite
├── Run (1-8).png       # Character running animation frames
├── Jump (1-10).png     # Character jumping animation frames
├── Dead (1-10).png     # Character death animation frames
├── run.mp3             # Running sound effect
├── jump.mp3            # Jumping sound effect
├── dead.mp3            # Death sound effect
└── README.md           # This file
```

## 🛠️ Technical Details

### Technologies Used
- **HTML5**: Structure and canvas
- **CSS3**: Styling, animations, and responsive design
- **JavaScript**: Game logic, collision detection, and audio management

### Key Features Implementation
- **Responsive Design**: Media queries ensure optimal gameplay across devices
- **Animation System**: Sprite-based character animations with smooth transitions
- **Collision Detection**: Precise bounding box collision with safety buffers
- **Audio Management**: Background music and sound effects with volume control
- **Performance Optimization**: Efficient rendering and memory management

### Browser Compatibility
- Chrome (Recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- No additional software required!

### Installation & Running

1. **Download/Clone** the project files
2. **Open** `index.html` in your web browser
3. **Play** the game immediately!

Alternatively, you can host it on a web server:
```bash
# Using Python (if you have Python installed)
python -m http.server 8000

# Using Node.js (if you have Node.js installed)
npx http-server

# Then open http://localhost:8000 in your browser
```

## 🎨 Game Assets

The game includes custom-designed assets:
- **Character Sprites**: 8 running frames, 10 jumping frames, 10 death frames
- **Environment**: High-quality forest background
- **Obstacles**: Tree trunk sprites
- **Audio**: Professional sound effects for immersive gameplay

## 🎮 Gameplay Mechanics

### Scoring System
- Points are awarded continuously while running
- Score increases by 10 points every 100ms
- Higher scores indicate longer survival times

### Difficulty
- Obstacles are strategically spaced for challenging but fair gameplay
- Jump timing requires skill and practice
- Game becomes more challenging as you progress

### Physics
- Realistic jump arc and landing mechanics
- Gravity simulation for natural character movement
- Responsive controls for precise timing

## 🔧 Customization

### Modifying Game Settings
Edit `script.js` to customize:
- Jump height and duration
- Character movement speed
- Obstacle spacing and frequency
- Scoring rate
- Sound volume levels

### Styling Changes
Edit `style.css` to modify:
- Character and obstacle sizes
- Background appearance
- UI elements positioning
- Responsive breakpoints

## 📱 Mobile Support

The game is fully responsive and optimized for:
- **Desktop**: Full keyboard controls
- **Tablets**: Touch-friendly interface
- **Mobile Phones**: Optimized layouts and controls

## 🐛 Known Issues & Solutions

### Performance
- For optimal performance, use a modern browser
- Close other tabs if experiencing lag

### Audio
- Some browsers may require user interaction before playing audio
- Audio will start automatically after the first key press

## 🤝 Contributing

Contributions are welcome! Areas for improvement:
- Additional character animations
- New obstacle types
- Power-ups and special abilities
- Multiple difficulty levels
- Leaderboard system

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Credits

- Game design and development
- Custom sprite animations
- Sound effects and audio integration
- Responsive web design implementation

---

**Enjoy playing Jungle Run! 🌟**

*Challenge yourself to beat your high score and become the ultimate jungle runner!*
