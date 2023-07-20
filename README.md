# StayInn-Hotel-Booking-Project

<p align="center"><img src="/assets/images/logo.png"/></p>

Stay-Inn is a hotel booking platform that aims to make your lodging experience within Nigeria easier and more enjoyable. With our platform, you can discover the perfect accommodation for your stay.

<p align="center">
![Demo](/assets/stayIn-hotel-booking-platform-demo.gif)
</p>


## Table of Contents
- [Introduction](#introduction)
- [Pages](#Stay-Inn-Pages)
- [Sections](#sections)
  - [Navbar and Hero Section](#section-1-navbar-and-hero-section)
  - [Explore Exciting Room Deals](#section-2-explore-exciting-room-deals)
  - [Popular Locations](#section-3-popular-locations)
  - [Stay Longer, Save More](#section-4-stay-longer-save-more)
  - [Discover More Top Rated Hotels](#section-5-discover-more-top-rated-hotels)
  - [Newsletter](#section-6-newsletter)
  - [Footer](#section-7-footer)

## Introduction

This project is a hotel booking platform called Stay-Inn, developed to help users find the best hotels in their city within Nigeria. The platform offers a user-friendly interface to search for accommodations based on location, check-in/out dates, and the number of guests.

## Technologies Used:
### HTML
### CSS
### JAVASCRIPT
### FONTAWESOME ICON LIBRARY
### INTERSECTION OBSERVER API (JS)
### COUNTRY-SELECT JS LIBRARY
### PHONE NUMBER LIBRARY


## Sections

### Section 1: Navbar and Hero Section

This section includes the navigation bar at the top of the page, providing links to the Home, Bookings, and Support pages. Users can also sign in or register using the provided buttons. The hero section contains a write-up welcoming users to the platform and allows them to search for accommodations by location, number of guests, and check-in/out dates.

### Section 2: Explore Exciting Room Deals

In this section, users can explore exciting room deals offered by Savannah Luxury Hotel. The section displays hotel images and a brief description of the amenities. Users can click the "Explore More" button to discover more about the hotel.

### Section 3: Popular Locations

This section showcases popular locations in Nigeria, including Abuja, Lagos, Port Harcourt, Owerri, Kano, and Calabar. Users can click on each location to explore available accommodations.

### Section 4: Stay Longer, Save More

The discount section offers a special discount for guests staying for a certain number of nights. Users can get a 15% discount for staying two nights or more and a 25% discount for staying four nights or more. The offer is valid until October 31st, 2023.

### Section 5: Discover More Top Rated Hotels

In this section, users can discover more top-rated hotels in Nigeria. The platform features hotels known for their exceptional quality, impeccable service, and attention to detail. The hotels cater to various needs, including romantic getaways, family-friendly retreats, and luxurious business stays.

### Section 6: Newsletter

Users can subscribe to the newsletter to stay up-to-date with the latest news and offers from Stay-Inn.

### Section 7: Footer

The footer provides links to essential company information, including About Us, Legal Information, Contact Us, and Blogs. The Help Centre section offers links for finding a hotel, joining the platform, FAQs, and booking guides. Users can also contact Stay-Inn via phone or email and connect through social media platforms.

## Stay Inn Pages
- [Booking](#Booking-Page)
- [Support](#Support-Page)
- [Signin](#Signin-Page)
- [Signup](#Register-Page)

# Booking Page

The Booking page is a crucial component of the hotel booking platform project, enabling users to complete the hotel booking check-out process. Users are required to provide their information and select their desired room options to proceed with the booking.

### HTML Structure

- **Booking Form**
- *Logo: Displayed at the top of the form, linking back to the Home page.*
- *Heading: A heading providing information about the booking process.*
- *Name Input: A dropdown for selecting the title (Mr, Mrs, etc.) and an input field for the user's name.*
- *Email Input: An input field for users to enter their email address.*
- *Phone Number Input: A phone number input field with a country selection dropdown to choose the country code. Phone number validation is provided using the libphonenumber-js library.*
- *"Terms & Privacy Policy" Checkbox: A checkbox for users to agree to the platform's terms and privacy policy.*
- **Booking Preview*
- *A booking preview section displays information about the hotel and available room options.*
- *Users can select the check-in/check-out dates and the number of guests.*
- *Two Deluxe Room options are presented, each with its price per night and a "Select Room" button.*
- *The total cost of the booking is displayed.*
- *A link is provided to view more room options.*
- *Two booking action buttons are available: "Pay Now" and "Book on Hold."*

### CSS Styling
The CSS styling for the Booking page is defined in the external stylesheet "booking.css." 

### JavaScript Functionality
The Booking page includes JavaScript code that utilizes the country-select-js library to display a country selection dropdown for phone number input. Additionally, the libphonenumber-js library is used to validate the phone number based on the selected country code. The page also includes a reference to the "scrollOnView.js" script, which likely handles the intersection of observed elements for animation purposes. 


# Support-Page

The Support page is part of the hotel booking platform project and provides customer support services to assist users with their bookings and inquiries. The page allows users to leave a message and get in touch with the support team through various communication channels.

### HTML Structure

### SECTION 1: Navbar and Header
- *The <section> with the class "top_dashboard lazy-section" contains the navbar and header of the page.*
- *The navbar includes navigation links to the Home, Bookings, and Support pages.*
- *The "Sign in" and "Register" buttons allow users to access the respective pages.*
- *The hamburger icon is used to toggle the display of the navigation links on smaller screens.*
- *JavaScript code handles the hamburger menu functionality.*

### SECTION 2: Customer Support Information
- *The <section> with the class "support" presents the customer support information.*
- *A heading and paragraph provide a warm welcome and emphasize the commitment to exceptional service.*
- *The contact information, including a phone number and email address, is displayed for users to reach out for support.*

### SECTION 3: Leave a Message Form
- *The <form> allows users to leave a message for customer support.*
- *Users can input their full name, title, email address, and the message they wish to convey.*
- *The form includes a "Submit" button to send the message to the support team.*

### CSS Styling
The CSS styling for the Register page is defined in the external stylesheet "support.css

### JavaScript Functionality
The Register page includes a reference to the JavaScript file "scrollOnView.js," which likely handles the intersection of observed elements for animation purposes.


# Signin Page
Sign In Page
The Sign In page is part of the hotel booking platform project and serves as the user login interface. It allows registered users to sign in to their accounts and access the platform's features and services.

### HTML Structure

- *The sign-in form is enclosed in a <div> with the class "signup lazy-section."*
- **Inside the sign-in form, users can find the following elements**
- *Logo: Displayed at the top of the form, linking back to the Home page.*
- *Welcome Message: A heading welcoming users back to the platform.*
- *Login with Google Button: A disabled button with an associated image and text.*
- *Horizontal Demarcation: A horizontal line with "OR" in the center, separating the Google button from the email and - password inputs.*
- *Email Input: An input field for users to enter their email address.*
- *Password Input: An input field for users to enter their password.*
- *"Remember Password" Checkbox: A checkbox for users to remember their password.*
- *"Forgot Password" Link: A link leading to a page for password recovery.*
- *"Login" Button: A button to submit the login form.*
- *"Don’t have an account?" Link: A link to navigate users to the Sign Up page.*
- **Background Image**
- *A background image is displayed on the right side of the form, creating visual appeal.*

### CSS Styling
The CSS styling for the Sign In page is defined in the external stylesheet "signin.css."
### JavaScript Functionality
The Sign In page includes a reference to the JavaScript file "scrollOnView.js," which likely handles the intersection of observed elements for animation purposes.


# Register Page

The Register page is part of Stay-Inn-Hotel booking platform and serves as the user registration interface. It allows new users to sign up for an account to access the platform's features and services.

### HTML Struture
- *Logo: Displayed at the top of the form, linking back to the Home page.*

- *Welcome Message: A heading welcoming users back to the platform.*

- *Login with Google Button: A disabled button with an associated image and text.*

- *Horizontal Demarcation: A horizontal line with "OR" in the center, separating the Google button from the email and password inputs.*

- *Email Input: An input field for users to enter their email address.*

- *Password Input: An input field for users to enter their password.*

- *"Remember Password" Checkbox: A checkbox for users to remember their password.*

- *"Forgot Password" Link: A link leading to a page for password recovery.*

- *"Login" Button: A button to submit the login form.*

- *"Don’t have an account?" Link: A link to navigate users to the Sign Up page.*

- *A background image is displayed on the right side of the form, creating visual appeal*.

### CSS Styling
The CSS styling for the Register page is defined in the external stylesheet "signin.css." 

### JavaScript Functionality
The Register page includes a reference to the JavaScript file "scrollOnView.js," which likely handles the intersection of observed elements for animation purposes.