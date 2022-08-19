const data = [
    {
        url: "breathe-shoes",
        title: "Breathe Shoes",
        techs: ['/icons/django.svg', '/icons/postgresql.svg', '/icons/docker.svg', '/icons/react.svg', 'icons/bootstrap.svg'],
        images: ["/images/projects/breatheshoes.png", "/images/projects/breatheshoes1.png", "/images/projects/breatheshoes2.png", "/images/projects/breatheshoes3.png"],
        description: [
            "Breathe Shoes is a ficcional shop. This website backend end is running inside a container in a AWS EC2 instance and its front end in a S3 bucket",
            "The administrator have an admin panel where it can register the products besides the admin from django",
            "The Payment is done through Pagseguro and Paypal API in sandbox mode",
            "The authentication have all common functionalities such as register user with email validation, login and reset password."
        ],
        repo: "https://github.com/GabrielSouzaCosta/shoe-shop"
    },
    {
        url: "heaven-bakery",
        title: "Heaven Bakery",
        techs: ['/icons/django.svg', '/icons/postgresql.svg', '/icons/react.svg', 'icons/bootstrap.svg'],
        images: ["/images/projects/heavenbakery.png", "/images/projects/heavenbakery1.png", "/images/projects/heavenbakery2.png", "/images/projects/heavenbakery3.png"],
        description: [
            "Heaven Bakery is a simulation of an online shop",
            "The administrator register products and put them to sale",
            "All authentication features are provided",
            "The payment is done using Stripe."
        ],
        repo: "https://github.com/GabrielSouzaCosta/shoe-shop"
    },
    {
        url: "anime-hunter",
        title: "Anime Hunter",
        techs: ['/icons/django.svg', '/icons/postgresql.svg', 'icons/bootstrap.svg'],
        images: ["/images/projects/animehunter.png", "/images/projects/animehunter1.png", "/images/projects/animehunter2.png", "/images/projects/animehunter3.png"],
        description: [
            "The website is an watchlist manager and it uses the MyAnimeList Api to retrieve the animes information",
            "You can add an anime to your watchlist manager or add to favorites, when added to favorites, it considers that you have watched all episodes",
            "The Discover page generates random anime for your enjoyment",
            "The favorites page is in tier list format."
        ],
        repo: "https://github.com/GabrielSouzaCosta/shoe-shop"
    },
    {
        url: "save-a-pet",
        title: "Save a Pet",
        techs: ['/icons/django.svg', '/icons/postgresql.svg', 'icons/bootstrap.svg'],
        images: ["/images/projects/salveumpet.png", "/images/projects/salveumpet1.png", "/images/projects/salveumpet2.png", "/images/projects/salveumpet3.png", "/images/projects/salveumpet4.png"],
        description: [
            "Save a pet is a website for donating cats and dogs",
            "The pets page show the last posts registered",
            "The details page show basic information about the pet and also some rating for fun",
            "In the edit/create page you can add name, description, images that are saved at S3 bucket, etc.",
            "The profile page shows pets you want to donate or/and adopt, and you can upload or change the image for profile."
        ],
        repo: "https://github.com/GabrielSouzaCosta/shoe-shop"
    },
    {
        url: "excelfiller",
        title: "ExcelFiller",
        techs: ['/icons/django.svg', '/icons/postgresql.svg', 'icons/bootstrap.svg'],
        images: ["/images/projects/excelfiller.png", "/images/projects/excelfiller1.png"],
        description: [
            "Excelfiller is a tool for fasten the creation of spreadsheets that need a lot of repetitive data",
            "It offers many types of data: registered items, prefixed and suffixed text, automatic or manual date and time, and currency"
        ],
        repo: "https://github.com/GabrielSouzaCosta/shoe-shop"
    },
]

export default data