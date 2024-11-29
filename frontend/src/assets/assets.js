import add_icon from "./add_icon.svg";
import admin_logo from "./admin_logo.svg";
import appointment_icon from "./appointment_icon.svg";
import cancel_icon from "./cancel_icon.svg";
import doctor_icon from "./doctor_icon.svg";
import home_icon from "./home_icon.svg";
import people_icon from "./people_icon.svg";
import upload_area from "./upload_area.svg";
import list_icon from "./list_icon.svg";
import tick_icon from "./tick_icon.svg";
import appointments_icon from "./appointments_icon.svg";
import earning_icon from "./earning_icon.svg";
import patients_icon from "./patients_icon.svg";
import Medi_Appointment from "./Medi_Appointment.png";

import appointment_img from "./appointment_img.png";
import header_img from "./header_img.png";
import group_profiles from "./group_profiles.png";
// import profile_pic from "./profile_pic.png";
import profile_pic from "./profile_pic.jpeg";
import contact_image from "./contact_image.png";
import about_image from "./about_image.png";
import logo from "./logo.svg";
import dropdown_icon from "./dropdown_icon.svg";
import menu_icon from "./menu_icon.svg";
import cross_icon from "./cross_icon.png";
import chats_icon from "./chats_icon.svg";
import verified_icon from "./verified_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import info_icon from "./info_icon.svg";
import upload_icon from "./upload_icon.png";
import stripe_logo from "./stripe_logo.png";
import razorpay_logo from "./razorpay_logo.png";
import doc1 from "./doc1.png";
import doc2 from "./doc2.png";
import doc3 from "./doc3.png";
import doc4 from "./doc4.png";
import doc5 from "./doc5.png";
import doc6 from "./doc6.png";
import doc7 from "./doc7.png";
import doc8 from "./doc8.png";
import doc9 from "./doc9.png";
import doc10 from "./doc10.png";
import doc11 from "./doc11.png";
import doc12 from "./doc12.png";
import doc13 from "./doc13.png";
import doc14 from "./doc14.png";
import doc15 from "./doc15.png";
import Dermatologist from "./Dermatologist.svg";
import Gastroenterologist from "./Gastroenterologist.svg";
import General_physician from "./General_physician.svg";
import Gynecologist from "./Gynecologist.svg";
import Neurologist from "./Neurologist.svg";
import Pediatricians from "./Pediatricians.svg";
// import Medi_Appointment from "./Medi_Appointment.png";

export const assets = {
  add_icon,
  admin_logo,
  appointment_icon,
  cancel_icon,
  doctor_icon,
  upload_area,
  home_icon,
  patients_icon,
  people_icon,
  list_icon,
  tick_icon,
  appointments_icon,
  earning_icon,
  Medi_Appointment,
  appointment_img,
  header_img,
  group_profiles,
  logo,
  chats_icon,
  verified_icon,
  info_icon,
  profile_pic,
  arrow_icon,
  contact_image,
  about_image,
  menu_icon,
  cross_icon,
  dropdown_icon,
  upload_icon,
  stripe_logo,
  razorpay_logo,
};

// export const assets = {
//     appointment_img,
//     header_img,
//     group_profiles,
//     logo,
//     chats_icon,
//     verified_icon,
//     info_icon,
//     profile_pic,
//     arrow_icon,
//     contact_image,
//     about_image,
//     menu_icon,
//     cross_icon,
//     dropdown_icon,
//     upload_icon,
//     stripe_logo,
//     razorpay_logo
// }

export const specialityData = [
  {
    speciality: "General physician",
    image: General_physician,
  },
  {
    speciality: "Gynecologist",
    image: Gynecologist,
  },
  {
    speciality: "Dermatologist",
    image: Dermatologist,
  },
  {
    speciality: "Pediatricians",
    image: Pediatricians,
  },
  {
    speciality: "Neurologist",
    image: Neurologist,
  },
  {
    speciality: "Gastroenterologist",
    image: Gastroenterologist,
  },
];

export const doctors = [
  {
    _id: "doc1",
    name: "Dr. Rajesh Mehta",
    image: doc1,
    speciality: "General physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Mehta is dedicated to providing comprehensive healthcare services with a strong focus on preventive medicine and early diagnosis. He aims to serve the community by offering personalized treatment plans and fostering better health outcomes for his patients.",
    fees: 2500,
    address: {
      line1: "Bandra West, Linking Road",
      line2: "Mumbai, Maharashtra, India"
    },
  },
  {
    _id: "doc2",
    name: "Dr. Aarav Nair",
    image: doc2,
    speciality: "Pediatrician",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Aarav Nair is a caring pediatrician focused on ensuring the health and well-being of children through expert diagnosis and preventive care.",
    fees: 2000,
    address: {
        line1: '47th Cross, MG Road',
        line2: 'Kochi, Kerala, India',
    },
  },
  {
    _id: "doc3",
    name: "Dr. Aditya Verma",
    image: doc3,
    speciality: "Gastroenterologist",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Aditya Verma is committed to advancing neurological care through innovative treatments and a patient-centered approach.",
    fees: 3000,
    address: {
        line1: '57th Cross, Sector 14',
        line2: 'Gurugram, Haryana, India',
    },
  },
  {
    _id: "doc4",
    name: "Dr. Priya Sharma",
    image: doc4,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Priya Sharma is a compassionate gynecologist dedicated to improving women's health. She focuses on providing personalized care, early diagnosis, and treatment to ensure well-being.",
    fees: 4000,
    address: {
        line1: '27th Cross, JP Nagar',
        line2: 'Bangalore, Karnataka, India',
    },
  },
  {
    _id: "doc5",
    name: "Dr. Kavya Patel",
    image: doc5,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Kavya Patel specializes in skincare and is passionate about treating various dermatological conditions. She is committed to providing effective and modern treatments.",
    fees: 2500,
    address: {
        line1: '37th Cross, Rajkot',
        line2: 'Gujarat, India',
    },
  },
  {
    _id: "doc6",
    name: "Dr. Rajiv Kumar",
    image: doc6,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Rajiv Kumar provides holistic medical care with a focus on preventive healthcare, ensuring early diagnosis and effective treatments.",
    fees: 800,
    address: {
        line1: '17th Cross, Connaught Place',
        line2: 'New Delhi, India',
    },
  },
  {
    _id: "doc7",
    name: "Dr. Sneha Gupta",
    image: doc7,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Sneha Gupta is a dedicated neurologist who specializes in diagnosing and treating neurological disorders. She strives to provide the best possible care for her patients.",
    fees: 600,
    address: {
        line1: '57th Cross, Andheri West',
        line2: 'Mumbai, Maharashtra, India',
    },
  },
  {
    _id: "doc8",
    name: "Dr. Anjali Sinha",
    image: doc8,
    speciality: "Gynecologist",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Anjali Sinha focuses on offering comprehensive women’s health services with a patient-first approach to improve overall quality of life.",
    fees: 6000,
    address: {
        line1: '27th Cross, Civil Lines',
        line2: 'Jaipur, Rajasthan, India',
    },
  },
  {
    _id: "doc9",
    name: "Dr. Vihaan Joshi",
    image: doc9,
    speciality: "Pediatricians",
    degree: "MBBS",
    experience: "7 Years",
    about:
      "Dr. Vihaan Joshi is dedicated to providing the best care for children and promoting their overall health and development.",
    fees: 3000,
    address: {
        line1: '47th Cross, Park Street',
        line2: 'Kolkata, West Bengal, India',
    },
  },
  {
    _id: "doc10",
    name: "Dr. Karan Iyer",
    image: doc10,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "2 Years",
    about:
      "Dr. Karan Iyer is dedicated to providing innovative and effective neurological care tailored to each patient.",
    fees: 10000,
    address: {
        line1: '57th Cross, Race Course Road',
        line2: 'Coimbatore, Tamil Nadu, India',
    },
  },
  {
    _id: "doc11",
    name: "Dr. Priti Singh",
    image: doc11,
    speciality: "Neurologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Priti Singh has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 15000,
    address: {
        line1: '27th Cross, Civil Lines',
        line2: 'Jaipur, Rajasthan, India',
    },
  },
  {
    _id: "doc12",
    name: "Dr. Rohan Karangle",
    image: doc12,
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Rohan Karangle has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.",
    fees: 5000,
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Ring Road, London",
    },
  },
  {
    _id: "doc13",
    name: "Dr. Rhea Desai",
    image: doc13,
    speciality: "'Neurologist'",
    degree: "MBBS",
    experience: "4 Years",
    about:
      "Dr. Rhea Desai is an expert neurologist focused on treating complex neurological conditions with the latest medical advancements",
    fees: 8000,
    address: {
        line1: '57th Cross, Salt Lake City',
        line2: 'Kolkata, West Bengal, India',
    },
  },
  {
    _id: "doc14",
    name: "Dr. Suman Das",
    image: doc14,
    speciality: "General Physician",
    degree: "MBBS",
    experience: "3 Years",
    about:
      "Dr. Suman Das is committed to delivering quality medical care with a strong focus on preventive treatments and overall wellness",
    fees: 3000,
    address: {
        line1: '17th Cross, Salt Lake City',
        line2: 'Kolkata, West Bengal, India',
    },
  },
  {
    _id: "doc15",
    name: "'Dr. Neha Chopra'",
    image: doc15,
    speciality: "'Gynecologist'",
    degree: "MBBS",
    experience: "1 Years",
    about:
      "Dr. Neha Chopra provides compassionate and skilled gynecological care, ensuring a safe and comfortable experience for her patients.",
    fees: 4000,
    address: {
        line1: '27th Cross, South Extension',
        line2: 'New Delhi, India',
    },
  },
];
