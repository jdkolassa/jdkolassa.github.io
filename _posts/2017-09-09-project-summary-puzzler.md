---
id: 1697
title: 'Project Summary: Puzzler'
date: 2017-09-09T14:09:41+00:00
author: Jeremy
layout: post
guid: http://jdkolassa.net/?p=1697
permalink: /2017/09/project-summary-puzzler/
published: false
ljID:
  - null
dsq_thread_id:
  - "6131555650"
categories:
  - Uncategorized
---
<ol style="list-style-type: upper-roman;">
  <li style="font-weight: 400;">
    <h3>
      <span style="font-weight: 400;">Introduction</span>
    </h3>
  </li>
  
  <li style="font-weight: 400;">
    <h3>
      <span style="font-weight: 400;">Outcomes</span>
    </h3>
  </li>
  
  <li style="font-weight: 400;">
    <h3>
      <span style="font-weight: 400;">Process History</span>
    </h3>
  </li>
  
  <li style="font-weight: 400;">
    <h3>
      <span style="font-weight: 400;">User Testing and Iteration</span>
    </h3>
  </li>
  
  <li style="font-weight: 400;">
    <h3>
      <span style="font-weight: 400;">Breakdown of Final Product</span>
    </h3>
  </li>
  
  <li style="font-weight: 400;">
    <h3>
      <span style="font-weight: 400;">Conclusion</span>
    </h3>
  </li>
</ol>

##### I.) Introduction

<span style="font-weight: 400;">Project Puzzler is both a game and an educational opportunity. Built as a class project in the Udacity VR Nanodegree Program, Puzzler’s creation was a framework towards learning the fundamentals of VR design. It is also, as the name indicates, a VR puzzle game that introduces people to the new experience that is VR. Using feedback, it guides users in understanding how VR interfaces work, and what to do when you don’t have a controller in front of you.</span>



(Audio may be out of sync in the video.)

##### II.) OUtcomes

<span style="font-weight: 400;">Puzzler is built for the Android OS and Google VR experience. You can download and try the .apk </span>[<span style="font-weight: 400;">with this link</span>](https://www.dropbox.com/s/akxec9qba7uy0z7/final.apk?dl=0)<span style="font-weight: 400;">. The experience is deliberately not too complex, consisting of a room with the puzzle, an entry corridor, an exit corridor, some light ambient sound, and a few scenery pieces. Too much would overload the user, but having too little would create a bland, uninteresting experience that would turn people off of VR in general.</span>

<span style="font-weight: 400;">The puzzle itself is a “Simon Says” type, where the player must follow the pattern of the flashing orbs in order to proceed. The orbs are arranged in a five point array that takes advantage of the 3D space, spreading out over the X, Y, and Z axes. Simple tones and textures provide feedback to the user, making it easy to follow the pattern without using too many complicated assets that could be distracting.</span>

##### III.) Process history

<span style="font-weight: 400;">The first step in creating Puzzler was writing a mission statement, to lay out a goal and an early stab at the scope of this project. The mission statement is:</span>

> _<span style="font-weight: 400;">Puzzler is a mobile VR application for new VR users which challenges them to solve a familiar type of puzzle in a new way.</span>_

<span style="font-weight: 400;">Using that as my basis for the project, I then proceeded to write up a persona of a possible user. Who would want to play this game? It would likely not be someone familiar with VR, as they would want something far more in-depth, so this would be oriented towards someone who lacked VR experience. I figured that the most likely user is someone who wants an easy introduction to VR, but it fascinated by its possibilities and wants to dip his or her toe in it. As such, I created the following persona:</span>

> _<span style="font-weight: 400;">Veronica, 24</span>_
> 
> _<span style="font-weight: 400;">Online Marketing Manager</span>_
> 
> _<span style="font-weight: 400;">“There’s always a way to reach someone, sometimes it just takes awhile to find it.”</span>_
> 
> _<span style="font-weight: 400;">Veronica specializes in online marketing, a <img class="alignleft size-medium wp-image-1701" src="http://jdkolassa.net/wp-content/uploads/2017/09/persona-200x300.jpeg" alt="" width="200" height="300" data-wp-pid="1701" srcset="http://jdkolassa.net/wp-content/uploads/2017/09/persona-200x300.jpeg 200w, http://jdkolassa.net/wp-content/uploads/2017/09/persona.jpeg 338w" sizes="(max-width: 200px) 100vw, 200px" />field that is constantly changing and adapting. Many days are exhausting with seemingly no progress made, but Veronica keeps at it. She needs something to take her mind off of work, but at the same time she’s always looking for inspiration in new ways of outreach. VR could kill two birds with one stone – exactly what she needs.</span>_
> 
> _<span style="font-weight: 400;">VR Experience: None</span>_

<span style="font-weight: 400;">Then, I moved forward with sketching out a basic picture of what I wanted the environment to look like. Although the class used a fantasy environment, I wanted to develop a sci-fi look instead, both to challenge myself as a designer and to explore other aesthetic possibilities.</span><figure id="attachment_1703" style="width: 660px" class="wp-caption aligncenter">

<img class="wp-image-1703 size-large" src="http://jdkolassa.net/wp-content/uploads/2017/09/sketch-855x1024.jpg" alt="" width="660" height="790" data-wp-pid="1703" srcset="http://jdkolassa.net/wp-content/uploads/2017/09/sketch-855x1024.jpg 855w, http://jdkolassa.net/wp-content/uploads/2017/09/sketch-251x300.jpg 251w, http://jdkolassa.net/wp-content/uploads/2017/09/sketch-768x920.jpg 768w, http://jdkolassa.net/wp-content/uploads/2017/09/sketch-800x958.jpg 800w, http://jdkolassa.net/wp-content/uploads/2017/09/sketch-526x630.jpg 526w, http://jdkolassa.net/wp-content/uploads/2017/09/sketch-501x600.jpg 501w" sizes="(max-width: 660px) 100vw, 660px" /><figcaption class="wp-caption-text">Initial sketch for an orbiting satellite environment, which I later rejected.</figcaption></figure> 

<span style="font-weight: 400;">After drawing the sketch, however, I realized that this posed a problem. Originally, I wanted it to be a station in space, with the idea being that interconnected modules would each hold an individual puzzle (in some far future iteration of this project.) I thought that space would be an ideal environment for a VR experience, as very few have been in space. However, examining what resources I had on me, I realized that creating such an environment that would meet my own standards and the user’s would be infeasible. It would take too much time and effort to develop my own models for the station, as I’m not a modeler myself. At this point, I decided to switch gears and rely on a free “starter kit” from the Unity Asset Store to build an indoor scifi environment.</span><figure id="attachment_1704" style="width: 660px" class="wp-caption aligncenter">

<img class="wp-image-1704 size-large" src="http://jdkolassa.net/wp-content/uploads/2017/09/making_prefabs-1024x568.png" alt="" width="660" height="366" data-wp-pid="1704" srcset="http://jdkolassa.net/wp-content/uploads/2017/09/making_prefabs-1024x568.png 1024w, http://jdkolassa.net/wp-content/uploads/2017/09/making_prefabs-300x166.png 300w, http://jdkolassa.net/wp-content/uploads/2017/09/making_prefabs-768x426.png 768w, http://jdkolassa.net/wp-content/uploads/2017/09/making_prefabs-800x443.png 800w, http://jdkolassa.net/wp-content/uploads/2017/09/making_prefabs-1137x630.png 1137w, http://jdkolassa.net/wp-content/uploads/2017/09/making_prefabs-600x333.png 600w" sizes="(max-width: 660px) 100vw, 660px" /><figcaption class="wp-caption-text">An example of the corner prefab I made to speed up development.</figcaption></figure> 

<span style="font-weight: 400;">The next step was building the environment itself. I started by focusing on the room, getting everything level and making sure all the polygons lined up. I created prefabs for the corner pieces and the ends of the hallways, as they were the most problematic. I also turned off the default directional light, being unsure if that would work for an indoor scene. I added in some ceiling lights to compensate. Then I put in the data orbs, that were the core of the puzzle experience. Initially I went with nine, as I liked the diamond aesthetics. I also wrote a small script to make them rotate, instead of just being still.</span><figure id="attachment_1710" style="width: 660px" class="wp-caption aligncenter">

<img class="wp-image-1710 size-large" src="http://jdkolassa.net/wp-content/uploads/2017/09/data_orb_diamond-1024x534.png" alt="" width="660" height="344" data-wp-pid="1710" srcset="http://jdkolassa.net/wp-content/uploads/2017/09/data_orb_diamond-1024x534.png 1024w, http://jdkolassa.net/wp-content/uploads/2017/09/data_orb_diamond-300x156.png 300w, http://jdkolassa.net/wp-content/uploads/2017/09/data_orb_diamond-768x400.png 768w, http://jdkolassa.net/wp-content/uploads/2017/09/data_orb_diamond-800x417.png 800w, http://jdkolassa.net/wp-content/uploads/2017/09/data_orb_diamond-1200x626.png 1200w, http://jdkolassa.net/wp-content/uploads/2017/09/data_orb_diamond-600x313.png 600w" sizes="(max-width: 660px) 100vw, 660px" /><figcaption class="wp-caption-text">Yes, I like baseball, how did you know?</figcaption></figure> 

<span style="font-weight: 400;">With the environment created, I made a build of just the scene, with the camera in the middle of the room, to use as a testing tool. Due to time constraints and miscommunication, I was unable to get user testing initially, so I kept the build and brought into work later.</span>

<span style="font-weight: 400;">I moved on to implementing the mechanics. First I sketched out some designs for the UI, which I decided would be very simple.</span>

<img class="alignleft wp-image-1705 size-medium" src="http://jdkolassa.net/wp-content/uploads/2017/09/ui_sketch_1-225x300.jpg" alt="" width="225" height="300" data-wp-pid="1705" srcset="http://jdkolassa.net/wp-content/uploads/2017/09/ui_sketch_1-225x300.jpg 225w, http://jdkolassa.net/wp-content/uploads/2017/09/ui_sketch_1-768x1024.jpg 768w, http://jdkolassa.net/wp-content/uploads/2017/09/ui_sketch_1-800x1067.jpg 800w, http://jdkolassa.net/wp-content/uploads/2017/09/ui_sketch_1-473x630.jpg 473w, http://jdkolassa.net/wp-content/uploads/2017/09/ui_sketch_1-450x600.jpg 450w" sizes="(max-width: 225px) 100vw, 225px" /><img class="alignright wp-image-1706 size-medium" src="http://jdkolassa.net/wp-content/uploads/2017/09/ui_sketch_2-225x300.jpg" alt="" width="225" height="300" data-wp-pid="1706" srcset="http://jdkolassa.net/wp-content/uploads/2017/09/ui_sketch_2-225x300.jpg 225w, http://jdkolassa.net/wp-content/uploads/2017/09/ui_sketch_2-768x1024.jpg 768w, http://jdkolassa.net/wp-content/uploads/2017/09/ui_sketch_2-800x1067.jpg 800w, http://jdkolassa.net/wp-content/uploads/2017/09/ui_sketch_2-472x630.jpg 472w, http://jdkolassa.net/wp-content/uploads/2017/09/ui_sketch_2-450x600.jpg 450w" sizes="(max-width: 225px) 100vw, 225px" />

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

&nbsp;

<span style="font-weight: 400;">I then created the UI in the environment itself. Placing the UI panels side by side, I created a build of this for further testing. I initially had some trouble as I had misplaced my Udacity Cardboard viewer, and was using another viewer I had purchased previously, which lacked a button. Since I (based on my own experiences) expected the button trigger to be a time based gaze, I was puzzled, until I realized it required an actual click and found the original Cardboard viewer.</span>

<span style="font-weight: 400;">Moving on from that, I imported the movement code and tested it. I had already chosen a rails-type system for my design, as there were only three points to move to. The default speed seemed fine, though I was a bit worried that it might be because I already had VR experience. Fortunately, user testing (in the next section) dispelled my doubts.</span>

<span style="font-weight: 400;">With the movement in place, I then imported audio assets. I purchased a sound effects library from ASoundEffect.com that had great scifi tones, and put them into the environment. To make the room less bland, I also put in a holographic monitor model, and attached the ambient noise to that to give the user a sense of place. Now that the audio assets were there, I put in the puzzle mechanics, and wired in feedback. At this point, I also realized that nine orbs was probably too much. So I dialed it back to five. I had also seen, while perusing the forums for the answer to a bug, that another student had arranged the orbs so as to approach the player. I thought that was genius, as it fully utilized the 3D space that VR offers. I didn’t go as far as the other student did, and I also took greater advantage of the Y-axis.</span><figure id="attachment_1711" style="width: 660px" class="wp-caption aligncenter">

<img class="size-large wp-image-1711" src="http://jdkolassa.net/wp-content/uploads/2017/09/5-puzzle-angled-1024x567.png" alt="" width="660" height="365" data-wp-pid="1711" srcset="http://jdkolassa.net/wp-content/uploads/2017/09/5-puzzle-angled-1024x567.png 1024w, http://jdkolassa.net/wp-content/uploads/2017/09/5-puzzle-angled-300x166.png 300w, http://jdkolassa.net/wp-content/uploads/2017/09/5-puzzle-angled-768x426.png 768w, http://jdkolassa.net/wp-content/uploads/2017/09/5-puzzle-angled-800x443.png 800w, http://jdkolassa.net/wp-content/uploads/2017/09/5-puzzle-angled-1137x630.png 1137w, http://jdkolassa.net/wp-content/uploads/2017/09/5-puzzle-angled-600x332.png 600w" sizes="(max-width: 660px) 100vw, 660px" /><figcaption class="wp-caption-text">This layout worked better in the final version than the diamonds.</figcaption></figure> 

<span style="font-weight: 400;">With the audio finally in place, the project was complete. The only thing left were to add some more set pieces, namely adding crates and another console to the corners. I really enjoyed making the crates; they reminded me of playing sci-fi adventure games as a child, and where I always wondered: </span>_<span style="font-weight: 400;">just what the hell are in those crates?</span>_



##### iv.) user testing and iteration

<span style="font-weight: 400;">User testing did not proceed as ideally as I wanted it to, due to some miscommunication between my testers and I. However, I was able to do user testing at my office. I used the separate builds to focus my testers on each of the elements of the app: environment, UI, motion, and finally the audio and completed game.</span><figure id="attachment_1700" style="width: 300px" class="wp-caption alignleft">

<img class="size-medium wp-image-1700" src="http://jdkolassa.net/wp-content/uploads/2017/09/jason_in_vr-300x225.jpg" alt="" width="300" height="225" data-wp-pid="1700" srcset="http://jdkolassa.net/wp-content/uploads/2017/09/jason_in_vr-300x225.jpg 300w, http://jdkolassa.net/wp-content/uploads/2017/09/jason_in_vr-600x450.jpg 600w, http://jdkolassa.net/wp-content/uploads/2017/09/jason_in_vr.jpg 640w" sizes="(max-width: 300px) 100vw, 300px" /><figcaption class="wp-caption-text">Jason takes his first steps into a larger world.</figcaption></figure> 

<span style="font-weight: 400;">Having my coworker Jason use the app on my phone, I asked him questions about the various elements of the app. He noted that the height felt exactly as he was in real life (then, perhaps, maybe just a </span>_<span style="font-weight: 400;">tad</span>_ <span style="font-weight: 400;">shorter). He described the environment as clean, clinical, even industrial. He also said it was like “on </span>_<span style="font-weight: 400;">Star Trek</span>_<span style="font-weight: 400;">,” which matched up with other testers who said it was “like a room on a </span>_<span style="font-weight: 400;">Mass Effect</span>_ <span style="font-weight: 400;">ship.” Since that is pure scifi, it was the right atmosphere I wanted to engender.</span>

<span style="font-weight: 400;">The movement test was the best. Asking my tester how he felt with the motion, he said it was perfectly fine, and then added:</span>

> _<span style="font-weight: 400;">I could be drunk and this would be perfectly okay.</span>_

<span style="font-weight: 400;">One of the problems that appeared in user testing was that the orbs were difficult to place in the scene, depth-wise. They also were quite close to the camera, so I moved the point for the camera to play the puzzle back a bit, and also went from the 9 orb diamond to the 5 orb arc.</span>

Interestingly, height was never a real problem. Although Jason and I are both over 6&#8242;, I also gave the game to a coworker who is about 5&#8217;0&#8243;, and she thought it was fine as well (except for the UI, which had to be tweaked just a little.)

<span style="font-weight: 400;">Finally, testers thought it was just a </span>_<span style="font-weight: 400;">smidgen</span>_ <span style="font-weight: 400;">too dark, so in the final version, I reactivated the directional light to make it just a tad brighter.</span><figure id="attachment_1698" style="width: 660px" class="wp-caption aligncenter">

<img class="wp-image-1698 size-large" src="http://jdkolassa.net/wp-content/uploads/2017/09/final_without_sunlight-1024x531.png" alt="" width="660" height="342" data-wp-pid="1698" srcset="http://jdkolassa.net/wp-content/uploads/2017/09/final_without_sunlight-1024x531.png 1024w, http://jdkolassa.net/wp-content/uploads/2017/09/final_without_sunlight-300x156.png 300w, http://jdkolassa.net/wp-content/uploads/2017/09/final_without_sunlight-768x399.png 768w, http://jdkolassa.net/wp-content/uploads/2017/09/final_without_sunlight-800x415.png 800w, http://jdkolassa.net/wp-content/uploads/2017/09/final_without_sunlight-1200x623.png 1200w, http://jdkolassa.net/wp-content/uploads/2017/09/final_without_sunlight-600x311.png 600w" sizes="(max-width: 660px) 100vw, 660px" /><figcaption class="wp-caption-text">Puzzler without the directional light game object.</figcaption></figure> <figure id="attachment_1699" style="width: 660px" class="wp-caption aligncenter"><img class="wp-image-1699 size-large" src="http://jdkolassa.net/wp-content/uploads/2017/09/final_with_sunlight-1024x535.png" alt="" width="660" height="345" data-wp-pid="1699" srcset="http://jdkolassa.net/wp-content/uploads/2017/09/final_with_sunlight-1024x535.png 1024w, http://jdkolassa.net/wp-content/uploads/2017/09/final_with_sunlight-300x157.png 300w, http://jdkolassa.net/wp-content/uploads/2017/09/final_with_sunlight-768x401.png 768w, http://jdkolassa.net/wp-content/uploads/2017/09/final_with_sunlight-800x418.png 800w, http://jdkolassa.net/wp-content/uploads/2017/09/final_with_sunlight-1200x627.png 1200w, http://jdkolassa.net/wp-content/uploads/2017/09/final_with_sunlight-600x314.png 600w" sizes="(max-width: 660px) 100vw, 660px" /><figcaption class="wp-caption-text">Puzzler using the directional light game object.</figcaption></figure> 

Further testing also indicated that I had to be much more explicit in my instructions. I had said “follow the orbs <span style="font-weight: 400;">with your eyes,” naively assuming people would understand to click. I rewrote those instructions to be more clear.</span>

<img class="alignright size-medium wp-image-1713" src="http://jdkolassa.net/wp-content/uploads/2017/09/roshni_notes-204x300.jpg" alt="" width="204" height="300" data-wp-pid="1713" srcset="http://jdkolassa.net/wp-content/uploads/2017/09/roshni_notes-204x300.jpg 204w, http://jdkolassa.net/wp-content/uploads/2017/09/roshni_notes-768x1128.jpg 768w, http://jdkolassa.net/wp-content/uploads/2017/09/roshni_notes-697x1024.jpg 697w, http://jdkolassa.net/wp-content/uploads/2017/09/roshni_notes-800x1175.jpg 800w, http://jdkolassa.net/wp-content/uploads/2017/09/roshni_notes-429x630.jpg 429w, http://jdkolassa.net/wp-content/uploads/2017/09/roshni_notes-409x600.jpg 409w" sizes="(max-width: 204px) 100vw, 204px" /><img class="alignleft size-medium wp-image-1712" src="http://jdkolassa.net/wp-content/uploads/2017/09/jason_notes-229x300.jpg" alt="" width="229" height="300" data-wp-pid="1712" srcset="http://jdkolassa.net/wp-content/uploads/2017/09/jason_notes-229x300.jpg 229w, http://jdkolassa.net/wp-content/uploads/2017/09/jason_notes-768x1008.jpg 768w, http://jdkolassa.net/wp-content/uploads/2017/09/jason_notes-781x1024.jpg 781w, http://jdkolassa.net/wp-content/uploads/2017/09/jason_notes-800x1050.jpg 800w, http://jdkolassa.net/wp-content/uploads/2017/09/jason_notes-480x630.jpg 480w, http://jdkolassa.net/wp-content/uploads/2017/09/jason_notes-457x600.jpg 457w" sizes="(max-width: 229px) 100vw, 229px" />

##### v.) breakdown of final product

<span style="font-weight: 400;">Puzzler is simple. The player begins in a hallway, with a panel in front of them introducing them to the project and warning them that motion is involved. The player clicks on the Start button, and they are moved forward into the room. The orbs begin to light up in sequence, emitting a small tone as they do so. The same tone plays as the player hovers over and clicks on the orbs. If the player fails, a warning sound emits and the sequence begins again. If the player succeeds, they are sent forward into the next corridor, where they are greeted by another panel that asks if they want to play it again.</span>

##### vi. conclusion

<span style="font-weight: 400;">In developing Puzzler, I learned a great deal about VR design and programming. Looking at both the Udacity and the Google VR code has shown me how to think about solving problems in VR space. Iterating through user testing highlighted blind spots in my thinking and made my work better as a result. As a bonus, my friends and coworkers who used the Puzzler app were impressed and amazed at what I had created. </span>

**Next Steps**

<span style="font-weight: 400;">If I were to continue developing Puzzler, it would grow to more rooms with more puzzles, each one highlighting a new way of thinking in VR. I would likely switch to a raycast form of travel, giving the user more choice so they could utilize the space more effectively. It would also have a greater variety of environments to be more visually appealing, which would necessitate either purchasing more model sets on the Unity Asset Store, partnering (or outright hiring) someone to develop them for me, or trying to do so myself. </span>

<!-- NgfbSharing::get_buttons content filter skipped: content ignored in back-end -->