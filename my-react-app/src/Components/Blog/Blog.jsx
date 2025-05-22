import './Blog.css';
import theConvalescentArtwork from '../../pictures/TheConvalescentArtwork.jpg'
import colorAnalysisOrgPic from '../../pictures/ColorAnalysisOrgPic.png';
import colorAnalysis1 from '../../pictures/ColorAnalysis1Pic.png';
import colorAnalysis2 from '../../pictures/ColorAnalysis2Pic.png';
import colorAnalysis3 from '../../pictures/ColorAnalysis3Pic.png';
import colorAnalysis4 from '../../pictures/ColorAnalysis4Pic.png';
import { useEffect } from 'react';


const blogEntries = [
  {
    title: 'UIUN Conference',
    date: 'November 11, 2024',
    content: [
      'For my UIUX class, we conducted an exercise called UIUN conference which was an accessibility workshop intended to get us students to begin thinking about the UI accessibility needs of a specific population. My population was Baby Boomers. After creating presentation about the needs of our respective population, we were tasked with meeting with all other populations to determine the most appropriate needs for the election website we would design. At the beginning we all put down requirements, with ranks, of our populations. Next, we went through all of the requirements of all populations and would ask to sign with the requirement if it was something your population would support. From there, we then needed to, as a class, determine the most important needs of all populations and negotiate to determine what the final needs necessary requirements of the website would be.',
      'The baby boomers had a lot of needs that aligned well with other populations. I learned that many of the needs of baby boomers were associated with their age as they could have poorer vision, hearing, movement, and in addition they could have a lack of experience with technology. Because of all this, the needs I have included descriptive instructions, large and clear to read text, error handling, saved progress on forms, contact information for help, and high color contrast on pages.',
      'The main recommendations that I fought strongly for were the priority of the form fields and specifically those forms saved throughout completion of them and that there was easy navigation across the website with breadcrumbs and etc. Because of the general needs and lots of crossover between my population and others, a lot of my requirements were voiced by other parties, allowing me to focus on the navigation and form needs. When the convention was tasked with shrinking the number of requirements that we could actually pass, we found ourselves making some requirements more general so that they could be merged with others. Or sometimes a simple requirement would become more of a laundry list of items so that we could get more out of one bill. Others times though, if a population was not very vocal for their requirements, the requirement they would want would get priority. I think one unlikely ally was young voters, which seemed unlikely because of the large gap in terms of age between my population and that population. Another group that I got along well with was anxiety. I worked with these groups because we both placed an emphasis on explanations on ways to get help. We also worked on making sure that progress was saved and that forms were easy to understand and follow. One of the harder groups for me to convince was Dyslexia because they were very focused on getting text-to-speech integrated into the website whereas this was not as large of a need for me.',
      'It felt bad to prioritize some needs over others because it feels like you are counting people out. I was hard to also fight for my population sometimes because it felt like I was saying that my population was more important that other populations.',
      'My greatest takeaway from the Summit was that it is important to consider all the needs of people who will be experiencing and utilizing your website. Even though it is very hard to make everything perfect, it is important to try to fulfill the needs of as many people as possible. I will take this forward with me as I build more websites and ensure they are as user-friendly as possible.'
    ]
  },
  {
    title: 'Finding Inspiration',
    date: 'October 1, 2024',
    content: [
      <h3>Introduction</h3>,
      'I visited the Sheldon Art Museum found on UNL’s campus and enjoyed the surrounding art pieces looking for one that truly caught my eye. This is when I found the following: The Convalescent by Lillian Westcott Hale.',
      <img src={theConvalescentArtwork} alt="The Convalescent Artwork" className="blog-img" />,
      <h3>Art Analysis</h3>,
      'My goal was to analysis the piece of art through a variety of UI/UX aspects.',
      <h3>Color Scheme:</h3>,
      'The first aspect of the artwork that spoke to me was the color scheme, and more specifically the red rose and blue strips on the blanket. The overall color of the artwork is very neutral with lots of browns and golds. The red rose sticks out strongly on this background and draws the viewer’s eye. In addition, red and blue are very contrasting colors, the most possible, and makes the rose stand out even more. This was a smart move by the artist because another colored flower would not have the same emphasis.',
      <h3>Rule of Thirds:</h3>,
      'The artwork follows the rule of thirds very well and is nicely divided in the vertical aspect. The top third is the top of the room and a brown color, the middle is the white blanket, and the bottom is the area closet to the viewer with more brown tones. In addition, the are two very strong power points in this artwork. First, there is the red rose at the bottom left power point which draws the eye. Secondly, the woman’s face is located at the top right power point which is what caught my eye next. This design makes the artwork very engaging and intriguing to look at.',
      <h3>Tension:</h3>,
      'The artwork also displays a lot of tension because of a combination of the elements above. The red and blue are distressing for viewers so that already create a tense viewership. Next, there is tension between the flower and the woman. One principle I have learned is that people follow the eyes of humans in artwork. In this piece, the woman initially feels like she is looking towards the flower but upon closer inspection, she is looking off at nothing and in the distance. I think this truly encapsulates what the piece is about as the flower is bright and lively and the woman seems paler and disconnected to the life around her. This distress between the two power points captures my attention and I can feel the internal struggle of the woman lying in bed. "Tension." Encyclopaedia Britannica, Encyclopaedia Britannica, Inc. Accessed 1 Oct. 2024, https://www.britannica.com/art/tension-art.',
    ]
  },
  {
    title: 'Color Study: Nike',
    date: 'September 5, 2024',
    content: [
      <img src={colorAnalysisOrgPic} alt="Color Analysis 1" className="blog-img"/>,
      <h3>Color Scheme Analysis: </h3>,
      'Nike’s website utilizes an achromatic color scheme meaning that the use only black, gray and white in their design. The only pop of color found on the website is from the picture on the bottom two thirds of the screen. Within this picture, there is an even brighter pop of orange on the shoe, which also conveniently displays Nike’s logo. The achromatic color scheme gives the website a subtle, modern feel to it. I believe that Nike designed the page like to really emphasis and give attention to the picture of the shoe. They want users to focus on the product they are trying to sell and not the different tabs and navigational features of the website. I believe this is a very effective strategy because my eye is immediately drawn to the picture and the shoe. Even if I was going on the website to look for something specific, I am now also interested in looking into this shoe. The basic layout makes it simple for me to navigate to whatever I am searching for, reducing the need for color emphasizes on tabs and bars.',
      <h3>Creating Unique Color Schemes:</h3>,
      <img src={colorAnalysis1} alt="Color Analysis 1" className="blog-img"/>,
      <h3>Color Scheme Analysis #1 Remake: </h3>,
      'For the first color scheme analysis, I changed the scheme to fit an analogous color scheme which is any three consecutive shades on a color wheel. In this case, I used orange, yellow-orange, and yellow as the three shades. I specifically chose this to match with the orange tab on the shoe. Unfortunately, the orange color on the shoe is brighter so it doesn’t exactly match but the overall color range is similar. The mood of this pattern is bright and energetic. It gives the feel of warm and bright but not necessarily overpowering. I think the designer would hope for the user to feel ready to take on the day with a new pair of shoes or other Nike apparel.',
      <img src={colorAnalysis2} alt="Color Analysis 2" className="blog-img"/>,
      <h3>Color Scheme Analysis #2 Remake: </h3>,
      'For the first color scheme analysis, I changed the scheme to fit a clash color scheme which mixing a color with the color to the left or right of its complement on the color wheel. In this case, the colors I mixed were green and purple. The feel of this design is disorganized. The color clash is not very soft on the eyes and distracts from anything else on the screen. In addition, purple with black text is not the easiest to read. The mood given off is hectic and does not draw attention to the product that Nike is trying to promote.',
      <img src={colorAnalysis3} alt="Color Analysis 3" className="blog-img"/>,
      <h3>Color Scheme Analysis #3 Remake: </h3>,
      'For the first color scheme analysis, I changed the scheme to fit a monochrome color scheme which is using different shades of the same color. For the monochrome color, I chose to use blue because I thought it could give off a cool vibe that it seems like Nike strives the have. I believe that this color scheme does effectively give off a chill vibe because of the blue and is not too overwhelming. A monochrome scheme allows for the colors to not be too contrasting and as a result lets the user focus on other details such as the picture. In addition, monochrome and achromatic are similar in terms of effect/lay out so it makes sense that this design flows well with the overall design and feel of the website.',
      <img src={colorAnalysis4} alt="Color Analysis 4" className="blog-img"/>,
      <h3>Color Scheme Analysis #4 Remake: </h3>,
      'For the first color scheme analysis, I changed the scheme to fit a neutral color scheme which uses neutral shades and tone. It is somewhat comparative to a monochrome look as well. I decided to create a look using these tones because I thought similarly to the original design, it could give a sleek and modern look. The user would feel down to earth but also have a calming presence. This color scheme would go well with a variety of pics meaning Nike could update their website frequently. In addition, the color scheme fits well into the background and your eye is still draw to the picture and focal point of the website. It allows users to carry on with their searching and shopping experience and not get distracted by the design of the website.',
      <h3>Effectiveness:</h3>,
      'Out of all the color scheme remakes, I would rank them on effectiveness in the following order with the first being the most effective: 4, 3, 1, 2. For Nike’s website, the most effective experience would have the picture be the focal point of the website while having a color scheme that does not draw away from the navigability of the website and I believe 4 best does this. The neutral scheme is very similar to the original in the fact that they both give a modern appeal that does not take away from the website and rather complements it. While 3 and 1 both had acceptable schemes, they still took away too much attention from the picture and the website. 2 was a very bad design and would not give the user a very enjoyable experience at all. The calming tone of the neutral color scheme would also give shoppers a more laid back and lighter experience with a modern appearance rather than something flashy that including more colors would have. While I believe that the original is still the best design, I don’t think Nike could go wrong with a color scheme similar to 4.'
    ]
  }
];

function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="blog-layout">
      <h1 className="blog-title">My Blog</h1>
      {blogEntries.map((entry, idx) => (
        <div className="blog-entry" key={idx}>
          <h2 className="blog-entry-title">{entry.title}</h2>
          <span className="blog-date">{entry.date}</span>
          <div className="blog-content">
            {entry.content.map((para, pIdx) =>
              typeof para === 'string' ? (
                <div
                  key={pIdx}
                  className="blog-paragraph"
                  dangerouslySetInnerHTML={{ __html: `<p>${para}</p>` }}
                />
              ) : (
                <div key={pIdx} className="blog-paragraph">
                  {para}
                </div>
              )
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;

