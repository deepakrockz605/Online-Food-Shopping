import animatedLine1 from '../Images/animated-line-1.svg'
import animatedLine2 from '../Images/animated-line-2.svg'

const getStoryData = () => {
  return [
    {
      storyTitle: 'THE RESTAURANT',
      storySubTitle:
        'Whatever your occasion,\n Delicious makes it one to remember',
      storyInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      storyMiddleImage: require('../Images/fine-dine-image-8.png'),
      storyProductTitleLeft: 'Deliciously Different',
      storyProductInfoLeft:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s",
      storyProductTitleRight: 'Best Quality',
      storyProductInfoRight:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s",
      storySubSectionClass: 'story-subSectionHead--Inner position-relative',
      storysubSectionLeftDish:
        'story-LeftsubSectionHeadDish story-subSectionHead',
      storysubSectionRightDish:
        'story-RightsubSectionHeadDish story-subSectionHead',
      animateImageClassImage1: animatedLine2,
      animateImageClass1: 'animated--line_1',
      animateImageClassImage2: animatedLine1,
      animateImageClass2: 'animated--line_2',
      animateImageClassImage3: animatedLine2,
      animateImageClass3: 'animated--line_3',
      animateImageClassImage4: animatedLine1,
      animateImageClass4: 'animated--line_4',
      fadeLeftImage1: 'bottom',
      fadeLeftImage2: 'left',
      fadeLeftContent: 'left',

      fadeLeftDelay: 700,
      fadeRightDelay: 700,
      selectPlusIconOne: 'select11 selectIMG',
      selectPlusIconTwo: 'select12 selectIMG'
    },

    {
      storyTitle: 'THE BAR',
      storySubTitle: 'First-class wines, \nhandcrafted for perfect moments',
      storyInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      storyMiddleImage: require('../Images/fine-dine-image-9.png'),
      storyProductTitleLeft: 'Rich As Life',
      storyProductInfoLeft:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s",
      storyProductTitleRight: 'Elegance, Defend',
      storyProductInfoRight:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s",
      storySubSectionClass: 'story-subSectionHead--Inner position-relative',
      storysubSectionLeftDish:
        'story-LeftsubSectionHeadBar story-subSectionHead',
      storysubSectionRightDish:
        'story-RightsubSectionHeadBar story-subSectionHead',
      animateImageClassImage1: animatedLine1,
      animateImageClass1: 'animated--line_2',
      animateImageClassImage2: animatedLine2,
      animateImageClass2: 'animated--line_1 none',
      animateImageClassImage3: animatedLine1,
      animateImageClass3: 'animated--line_3',
      animateImageClassImage4: animatedLine2,
      animateImageClass4: 'animated--line_4 none',
      fadeleftoneImage: 0,
      fadeLeftDelay: 700,
      fadeRightDelay: 700,
      selectPlusIconOne: 'select21 selectIMG',
      selectPlusIconTwo: 'select22 selectIMG'
    },

    {
      storyTitle: 'THE CHEF',
      storySubTitle:
        'Chef Alex Pooter \n invites you to explore the restaurant',
      storyInfo:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      storyMiddleImage: require('../Images/fine-dine-image-10.png'),
      storyProductTitleLeft: 'Passionate Craftsmanship',
      storyProductInfoLeft:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s",
      storyProductTitleRight: 'Culinary Expertise',
      storyProductInfoRight:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sstandard dummy text ever since the 1500s",
      storySubSectionClass: 'story-subSectionHead--Inner position-relative',
      storysubSectionLeftDish:
        'story-LeftsubSectionHeadChef story-subSectionHead',
      storysubSectionRightDish:
        'story-RightsubSectionHeadChef story-subSectionHead',
      animateImageClassImage1: animatedLine1,
      animateImageClass1: 'animated--line_2',
      animateImageClassImage2: animatedLine2,
      animateImageClass2: 'animated--line_1 none',
      animateImageClassImage3: animatedLine1,
      animateImageClass3: 'animated--line_3',
      animateImageClassImage4: animatedLine2,
      animateImageClass4: 'animated--line_4 none',
      selectPlusIconOne: 'select31 selectIMG',
      selectPlusIconTwo: 'select32 selectIMG',
      fadeleftoneImage: 0,
      fadeLeftDelay: 700,
      fadeRightDelay: 700
    }
  ]
}

export default getStoryData
