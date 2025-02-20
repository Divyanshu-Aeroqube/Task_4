import image1 from "../assets/gallery-1.png"
import image2 from "../assets/gallery-2.png"
import image3 from "../assets/gallery-3.png"
import image4 from "../assets/gallery-4.png"
import image5 from "../assets/gallery-5.png"
import image6 from "../assets/gallery-6.png"
import logo1 from '../assets/Group (1).svg'
import logo2 from '../assets/Group (2).svg'
import logo3 from '../assets/Group (3).svg'
import logo4 from '../assets/Group (4).svg'
import logo5 from '../assets/Group (5).svg'
import logo6 from '../assets/Group (6).svg'
import logo7 from '../assets/Group (7).svg'



const imageArr=[image1,image2,image3,image4,image5,image6,image3,image5];
const descData={
    description:[
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        ],
    Address:" HOUSE NO.- 99, THAPLIYA MAEHRA , Vijraula, Naukukichiata",
    Contact : 8747593736,
    Beds : 6,
    Check_In : 8,
    Check_Out : 12

}

const descLayout=[
    {
        title:"ABOUT VILLA SPACE",
        data:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        title:"NEIGHBOURHOOD DESCRIPTION",
        data:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        title:"HOUSE RULES",
        data:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
];

const descAminity=[
    {
        title:"INTERNET",
        logo:logo1
    },
    {
        title:"DINING AREA",
        logo:logo2
    },
    {
        title:"OUTDOOR FURNITURE",
        logo:logo3
    },
    {
        title:"KITCHEN",
        logo:logo4
    },
    {
        title:"SMOKING AREA",
        logo:logo5
    },
    {
        title:"MUSIC SYSTEM",
        logo:logo6
    },
    {
        title:"CARETAKER ON CALL",
        logo:logo7
    },


]

const desc={
    desc:descData,
	layout:descLayout,
	aminities:descAminity
}

const villas = [
    { 
      id: 1, 
      image: image1, 
      title: "Hilltruck Valley", 
      price: "₹375,000", 
      address: "1187 Lake Forest City, Uttrakhand", 
      bath: "2 Bath", 
      beds: "4 Beds", 
      size: "2986 sqft",
      images: imageArr, 
      desc: desc
    },
    { 
      id: 2, 
      image: image2, 
      title: "Sunset Retreat", 
      price: "₹420,000", 
      address: "235 Mountain View, Himachal", 
      bath: "3 Bath", 
      beds: "5 Beds", 
      size: "3500 sqft",
      images: imageArr,
      desc: desc
    },
    { 
      id: 3, 
      image: image3, 
      title: "Lakeside Paradise", 
      price: "₹500,000", 
      address: "78 Lakeshore Drive, Nainital", 
      bath: "4 Bath", 
      beds: "6 Beds", 
      size: "4200 sqft",
      images: imageArr,
      desc: desc,
    },
    { 
      id: 4, 
      image: image4, 
      title: "Mountain Escape", 
      price: "₹600,000", 
      address: "45 Peak Lane, Manali", 
      bath: "3 Bath", 
      beds: "5 Beds", 
      size: "3700 sqft",
      images: imageArr,
      desc: desc,
    },
    { 
      id: 5, 
      image: image5, 
      title: "Ocean Breeze", 
      price: "₹550,000", 
      address: "99 Coastal Road, Goa", 
      bath: "2 Bath", 
      beds: "4 Beds", 
      size: "3200 sqft",
      images: imageArr,
      desc: desc,
    },
    { 
      id: 6, 
      image: image6, 
      title: "Royal Estate", 
      price: "₹750,000", 
      address: "12 Palace Gardens, Jaipur", 
      bath: "5 Bath", 
      beds: "7 Beds", 
      size: "5000 sqft",
      images: imageArr,
      desc: desc,
    },
    { 
      id: 7, 
      image: image1, 
      title: "Hilltop Haven", 
      price: "₹400,000", 
      address: "23 Summit Heights, Shimla", 
      bath: "3 Bath", 
      beds: "5 Beds", 
      size: "3400 sqft",
      images: imageArr,
      desc: desc,
    },
    { 
      id: 8, 
      image: image2, 
      title: "Riverside Retreat", 
      price: "₹480,000", 
      address: "56 Riverbank Street, Rishikesh", 
      bath: "4 Bath", 
      beds: "6 Beds", 
      size: "3900 sqft",
      images: imageArr,
      desc: desc,
    },
    { 
      id: 9, 
      image: image3, 
      title: "Countryside Mansion", 
      price: "₹650,000", 
      address: "89 Green Fields, Punjab", 
      bath: "5 Bath", 
      beds: "7 Beds", 
      size: "4500 sqft",
      images: imageArr,
      desc: desc,
    }
  ];


  export default villas;
  