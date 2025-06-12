import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [isDark, setIsDark] = useState(false)

    const changeDark = () => {
      setIsDark(!isDark)
    }

  useEffect(() => {

  })
  const renderDocument = () => {
    return(
      <body>
<button onClick={changeDark}>Dark Mode</button>

  <h1>💤 The Science of Snuggles: Why Cuddling Before Bed Is So Good for You</h1>

  <p>At the end of a long day, there’s something incredibly comforting about wrapping up in a warm embrace with someone you love. Cuddling before bed isn’t just cozy—it’s good for your health, your mind, and your relationships. Let’s dive into why a nightly snuggle might be one of the simplest, most effective ways to improve your well-being.</p>

  <div class="section">
    <h2><span class="emoji">🧠</span>1. Cuddling Reduces Stress and Anxiety</h2>
    <p>When you cuddle, your brain releases <strong>oxytocin</strong>, often called the “love hormone.” Oxytocin promotes feelings of trust and bonding while lowering levels of <strong>cortisol</strong>, the stress hormone. This combination can help calm your nervous system, making it easier to fall asleep with a relaxed mind.</p>
  </div>

  <div class="section">
    <h2><span class="emoji">❤️</span>2. It Strengthens Relationships</h2>
    <p>Physical touch is a powerful form of nonverbal communication. Cuddling before sleep reinforces connection and intimacy, even without words. Regular cuddling can help couples feel closer, more secure, and emotionally satisfied, which in turn leads to stronger relationships.</p>
  </div>

  <div class="section">
    <h2><span class="emoji">😴</span>3. It Helps You Sleep Better</h2>
    <p>Studies show that <strong>physical closeness can lead to better sleep quality</strong>. That’s because oxytocin and reduced cortisol contribute to a sense of safety, which can help you fall asleep faster and stay asleep longer. Even brief cuddling before turning over can set the stage for deeper rest.</p>
  </div>

  <div class="section">
    <h2><span class="emoji">🩺</span>4. Cuddling May Improve Physical Health</h2>
    <p>The calming effect of cuddling can lead to <strong>lower blood pressure and heart rate</strong>, both of which are linked to better cardiovascular health. Some research even suggests regular cuddling may help strengthen your immune system by keeping stress levels in check.</p>
  </div>

  <div class="section">
    <h2><span class="emoji">🧘</span>5. It Can Be Grounding and Mindful</h2>
    <p>Cuddling invites you to slow down and be present. The warmth of skin-to-skin contact, the rhythm of breathing together—these small details can bring a sense of mindfulness that’s hard to find during a busy day. It’s a quiet, shared moment of peace.</p>
  </div>

  <div class="section">
    <h2><span class="emoji">👶</span>Bonus: It’s Not Just for Couples</h2>
    <p>Cuddling isn’t exclusive to romantic relationships. Snuggling with a child, a close friend, or even a pet can provide many of the same benefits. What matters most is the physical closeness and the emotional connection.</p>
  </div>

  <div class="section">
    <h2>🌙 Final Thoughts: A Simple Ritual With Big Rewards</h2>
    <p>In a world filled with screens, schedules, and stress, cuddling offers something beautifully simple: <strong>connection, calm, and care</strong>. Whether it’s a few minutes or the whole night, taking time to cuddle before bed can improve your mood, sleep, and sense of well-being.</p>
    <p>So go ahead—grab a blanket, scoot a little closer, and let your body (and mind) soak in the comfort. Sweet dreams start with a cuddle.</p>
  </div>
  </body>
    )
  }

  return (
    renderDocument
  )
}

export default App
