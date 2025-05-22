import React, { useEffect } from 'react';
import './StrideSync.css'
import SketchesAndComponents1 from '../../pictures/SketchesAndComponentsStep1.jpg'
import SketchesAndComponents2 from '../../pictures/SketchesAndComponentsStep2.jpg'
import SketchesAndComponents3 from '../../pictures/SketchesAndComponentsStep3.jpg'

function StrideSync() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="narrative-layout">
    <h1 className='section-title'>StrideSync Narrative</h1>
      <div className="section-box">
        <h2>Inspiration</h2>
        <p>The motivation for creating StrideSync stems from the realization that many runners, specifically those training for races, struggle with fragmented tools that don’t integrate the full range of their journey. Many runners training for a race follows a specific training schedule or guide. The issue though is that these schedules don’t provide a space to analyze and reflect on completed runs. Often, runners will have to switch between tracking data on their phone, a paper schedule, and their own memory of the past to determine if they are on track for the big race. This is where StrideSync comes in — an intuitive app that helps users track their runs and analyze their progress to ensure they are ready for race day.</p>
        <p>Drawing inspiration from my own experience as a runner, I wanted to create an app.</p>
        <p>As a designer, I’m uniquely positioned to create this app. Not only do I have the technical background in user interface design, but I also have personal experience with the challenges runners face in tracking and improving their performance. This project is an opportunity to merge my passion for running with my expertise in design, ensuring that the app is both functional and inspiring. I’m driven by the belief that the right tools can enhance a runner’s journey, and I’m excited to bring that vision to life with Stride Sync.</p>
      </div>

      <div className="section-box">
        <h2>Device</h2>
        <p>The target device type for this application is a tablet and/or personal computer. When sketching out the app, I originally thought to use a phone as the device because of its easy accessibility but quickly discovered that all the information I wanted to communicate would not be as clearly modelled on a phone. The screen would have to be very squished together and would not allow for easy readability. Instead, I went with a tablet or personal computer so the user could view all training and analysis on a larger screen. In addition, runners would truly want to track their progress will not mind logging onto their laptop or tablet to view their training progress. I would consider a mobile application later down the line but for the first implementation, a tablet or personal computer was the best choice.</p>
      </div>

      <div className="section-box">
        <h2>Stories and Declarations</h2>
        <p>The design of StrideSync was inspired by Rachel, a busy college junior preparing for a half marathon who needed a better way to track her runs and progress. The app addresses her challenges with an integrated dashboard that combines her training plan, daily mileage, and completed runs in one place. A journal feature allows Rachel to log details about each run, reflecting on both physical and mental challenges to track patterns over time. The minimalist design lets Rachel clearly understand her progress and how to better reach her goals. StrideSync allows users like Rachel to balance their busy lives, stay motivated, and push toward their running goals.</p>
      </div>

      <div className="section-box">
        <h2>Initial Sketches</h2>
        <p>From problem identification and to address Rachel’s issues...</p>
        <p><i>Step 1: Plan the Required Pages</i></p>
        <img src={SketchesAndComponents1} alt="Sketch 1" className="section-image" />
        <p><i>Step 2: Sketch Each Page</i></p>
        <img src={SketchesAndComponents2} alt="Sketch 2" className="section-image" />
        <p><i>Step 3: Identify the Design Elements</i></p>
        <img src={SketchesAndComponents3} alt="Sketch 3" className="section-image" />
      </div>

      <div className="section-box">
        <h2>Values and Design</h2>
        <p><b>Core Values</b></p>
        <p>1. Growth</p>
        <p>Growth is an important core value because the app is centered around helping runners push towards their own personal goals. The app should help runners develop their skills and grow through its means of tracking, journals, and comparisons. Even if runners don’t achieve their set goal, they should still be growing through the app and learning.</p>
        <p>2. Resourcefulness</p>
        <p>Resourcefulness is another important core value because the app should provide adequate information for the users to improve their running experience. A user needs to be able to find any running data easily and be able to compare and analyze their runs for the best results possible. It should be intuitive and not difficult to find.</p>
        <p><b>Integration of Values into Design</b></p>
        <p><b>Growth:</b> The first strategy I will use to signify growth is through the ability to move back and forth between dates. This is represented by the forward and back arrows seen on multiple screens. These signify to the user that they can look at past runs. The second strategy I have is to include the journal and run information on many of the pages so that the user can cross reference these statistics to understand their growth and how they performed in a given day. Finally, the last strategy I will utilize is trackers such as countdowns and progress checks. These will emphasis growth as the user can see how far out their run is or other valuable information.</p>
        <p><b>Resourcefulness:</b> The first strategy I will use to represent this value is through the color scheme. As we discussed in class, blue represents loyalty and trust. By implementing this color in my design, the users are likely to trust the resources I provide and given into the app more. The next strategy I will implement is multiple tabs with distinct purposes. By dividing out the app into sections, the user will be able to observe the specific statistic they want to see. A signifier of this is when you are on a specific tab, it is a darken shade of blue to indicate to the user which page they are on. The third strategy I will utilize is the creation of a profile page. This is a resource for the user because they are able to update the page to best represent themselves and then the resources provided by the app are personalized to them. In addition, every page the user would want to navigate to is represented by a button or tab on every page meaning all the resources are at their fingertips whenever they need it.</p>
      </div>

      <div className="section-box">
        <h2>Mockups</h2>
        <p>After creating sketches, I moved on to create Mockups of my application in Figma.</p>
        <iframe title="Mockup" src="https://embed.figma.com/design/aitKv9qKkKh6YRpGuRyHmY/StrideSync?node-id=0-1&embed-host=share" width="800" height="450" style={{ border: '1px solid rgba(0, 0, 0, 0.1)' }} allowFullScreen></iframe>
      </div>

      <div className="section-box">
        <h2>Design System</h2>
        <p><b>Colors</b></p>
        <p>The color palette features a gradient of soft blues, which were chosen to emit calmness and reliability while maintaining a modern aesthetic. The lighter blue tones provide a subtle contrast, helping to indicate active states like the selected navigation tab, without overwhelming the user. This supports the app's goal of providing clarity while staying visually clean and motivating.</p>
        <p><b>Fonts</b></p>
        <p>Two fonts were selected: Soltireo for the logo and Sofia Sans for the interface. Soltireo's handwritten style adds a personal style, resonating with runners who want their journey to feel unique and meaningful. Sofia Sans, on the other hand, was chosen for its modern and simplistic design, ideal for readability across different device sizes.</p>
        <p><b>Features and Navigation</b></p>
        <p>The star rating system stands out as one of the most user-centric features, as it allows users to quickly evaluate and reflect on their runs beyond numerical data. Similarly, the interactive calendar and weekly mileage graphs provide clear visuals for planning and progress tracking, ensuring users can easily navigate their training journey.</p>
        <p>(Note: Design System Updated for Final Prototype)</p>
        <iframe title="Design System" src="https://embed.figma.com/design/aitKv9qKkKh6YRpGuRyHmY/StrideSync?node-id=17-2&embed-host=share" allowFullScreen></iframe>
      </div>

      <div className="section-box">
        <h2>First Prototype</h2>
        <iframe title="First Prototype" src="https://embed.figma.com/design/aitKv9qKkKh6YRpGuRyHmY/StrideSync?node-id=32-16&embed-host=share" allowFullScreen></iframe>
        <p>The first prototype I created has 6 pages that each serve a different purpose. The “Home” page was a general display of the runner’s current day and included information such as how long to race day and what specific race the user is competing in. The “Track” page is where a user would report their run for the day. The “Journal” page is where the user can reflect on their run and leave notes. The “Journal” page also has an additional pop-up page where the user would create a journal entry. The “Train” page shows a cumulation of the runs through a calendar format. The “Analytics” page lets the user compare their current run with their planned run. Lastly, the “Profile” page lets the user update any personal or race related information. All the pages are connected through the navigation bar at the top, allowing the user to traverse the page easily.</p>
      </div>

      <div className="section-box">
        <h2>College Assessment</h2>
        <p>After creating the first prototype, I asked classmates and colleagues to review the initial prototype. I did not create an extensive user test script yet, I just wanted users to interact with the app and to receive feedback. I categorized the feedback into strengths, weaknesses, and changes to be made, and justification for changes.</p>
        <p><b>Strengths</b></p>
        <p>Clear Design Language: The app was visually appealing, with a cohesive design that aligned well with the purpose of running and training.</p>
        <p>Concept Strength: The idea of integrating journals, analytics, and tracking features into a single app was highly praised.</p>
        <p>Key Features Stand Out: Features like the training plan and the analyze page were seen as valuable additions for users who wanted to monitor their progress.</p>
        <p>Interactive Features: Colleagues appreciated the attempt to include sync capabilities with fitness trackers and manual input options.</p>
        <p><b>Weaknesses</b></p>
        <p>Overwhelming Home Page: The homepage included too much information, which confused users about its purpose.</p>
        <p>Confusing Navigation: Testers found the navigation unclear, especially with redundant features like duplicated date fields and the existence of too many pages.</p>
        <p> Representation Issues: The use of a pie chart to show progress did not resonate with users, as it was difficult to understand trends over time.</p>
        <p>Unclear Features: Users struggled to understand how runs were added or where tracking data was coming from.</p>
        <p>Transitions: Several buttons did not transition correctly, leading to confusion about page flows.</p>
        <p><b>Changes Made After Feedback</b></p>
        <p>Simplified Home Page: Reduced information density by removing unnecessary tabs (e.g., “Run Information” and “Journal Information”) and focusing on key stats with clear labels.</p>
        <p>Improved Data Representation: Replaced the pie chart on the "Analyze" page with a line graph to show progress over time, including markers for metrics like pace and distance.</p>
        <p>Streamlined Navigation: Removed duplicate date fields (side navigation eliminated in favor of bottom arrows) and corrected button transitions to ensure proper page flows.</p>
        <p>Enhanced Run Input Options: Added a Sync Data button for wearable integration and an Add Run button with a pop-up form for manual data entry.</p>
        <p><b>Justification of Changes</b></p>
        <p>These changes were made to address both high-priority usability issues and lower-priority, easy-to-fix problems.</p>
        <p>High-Priority Changes like simplifying the home page and improving data visualization address the primary user complaints about clarity and purpose.</p>
        <p>Low-Hanging Fruit like fixing transitions and removing duplicated date fields were quick fixes that significantly improved usability without requiring major design changes.</p>
      </div>

      <div className="section-box">
        <h2>Prototype 2</h2>
        <iframe title="Prototype 2" src="https://embed.figma.com/design/aitKv9qKkKh6YRpGuRyHmY/StrideSync?node-id=65-2&embed-host=share" allowFullScreen></iframe>
      </div>

      <div className="section-box">
        <h2>User Tests</h2>
        <p>After conducting a round of interviews, identifying issues, and creating a new prototype, I went to do another round of user testing, focusing on talking to users likely to use my application. I spoke with a variety of girls in my sorority house who have competed in an array of training programs from 5Ks to marathons.</p>
        <p>When completing the User Tests, I created a script that would have the user explore the application and provide general thoughts. Then, I had the user follow a task: “Create a journal entry for today’s run”. This task allowed me to grasp the users’ understanding of the application.</p>
        <p>Through the multiple tests conducted, I was able to gather a variety of strengths and weaknesses. From there I was able to implement more changes.</p>
        <p><b>Strengths</b></p>
        <p>Clear and intuitive design: Colleagues appreciated the straightforward layout, especially the calendar-based navigation and visualizations such as graphs. They noted it made planning and tracking runs easy to understand.</p>
        <p>Visual appeal: The use of soft blue tones and consistent design elements (e.g., fonts and button styles) made the prototype visually appealing and user-friendly.</p>
        <p>Star ranking system: While its purpose was unclear to some, the idea of rating runs with stars received positive feedback for its potential to help users evaluate their runs at a glance.</p>
        <p><b>Weaknesses</b></p>
        <p>Lack of clarity in some features: Features such as the star ranking system and the "Add Run" button were not immediately intuitive to users. These elements required clarification during the assessment.</p>
        <p>Limited interactivity: Users wanted more control over the data displayed in graphs and the ability to edit profile information more easily.</p>
        <p>Navigation limitations: While the calendar-based navigation was appreciated, the inability to scroll through months was flagged as a usability issue.</p>
        <p><b>Changes Made After the User Testing</b></p>
        <p>Improved star ranking system: Added stars as a visual representation on the Journal page to improve clarity and functionality.</p>
        <p>Added a clear label on the star icon on the Train page to explain its purpose, ensuring users immediately understand its relevance.</p>
        <p>Pop-up for "Add Run" button: Developed a pop-up with instructions to make it more obvious how users could input their run data. The pop-up provides a brief explanation of what fields need to be filled out (e.g., distance, time, pace).</p>
        <p>Ability to scroll through months on the Train page: Introduced buttons for navigating back and forth between months, allowing users to track progress over time.</p>
        <p>Enhanced graph functionality: Began planning for a feature that allows users to toggle between different types of data on the Analyze page, such as pace, distance, and time. While this change is still in development due to complexity, feedback informed its prioritization.</p>
        <p>Consistency in formatting and colors: Unified text formatting across pages for consistency, ensuring all input fields and text are aligned and standardized.</p>
        <p>Reduced color variation on the Home page to minimize distractions and enhance readability.</p>
        <p><b>Why Changes Were Made</b></p>
        <p>The changes directly addressed the feedback received during the assessment. Features like the pop-up for the "Add Run" button and the star ranking system were modified to improve usability and reduce confusion, aligning with the app's goal of simplifying the runner's journey. Navigational improvements, such as scrolling through months, were prioritized because they are essential for effective training tracking. Overall, the feedback emphasized that while the prototype was visually appealing, certain features needed refinement to ensure they were both functional and intuitive for users.</p>
      </div>

      <div className="section-box">
        <h2>Prototype 3</h2>
        <iframe title="Prototype 3" src="https://embed.figma.com/design/aitKv9qKkKh6YRpGuRyHmY/StrideSync?node-id=126-2&embed-host=share" allowFullScreen></iframe>
      </div>

      <div className="section-box">
        <h2>Final Changes</h2>
        <p>After implementing all the changes in Prototype 3, I had one last review session with the User Interfaces class I am currently part of. From their feedback, I made one last round of changes to get to the final product.</p>
      </div>

      <div className="section-box">
        <h2>Prototype 4</h2>
        <iframe title="Prototype 4" src="https://embed.figma.com/design/aitKv9qKkKh6YRpGuRyHmY/StrideSync?node-id=173-2&embed-host=share" allowFullScreen></iframe>
      </div>
    </div>
  );
}

export default StrideSync;