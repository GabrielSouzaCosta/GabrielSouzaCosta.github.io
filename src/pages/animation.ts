	import gsap from 'gsap';
	import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
	import { TextPlugin } from 'gsap/dist/TextPlugin';
	import i18next from 'i18next';

	let isAnimating = false;

  i18next
    .init({
      fallbackLng: 'en',
    })
    .then(() => {
			animate();
      i18next.on('languageChanged', animate);
    })

  function animate () {
		if (!isAnimating) {
			isAnimating = true;
			gsap.registerPlugin(
				ScrollTrigger,
				TextPlugin,
			) 
	
			const heroTimeline = gsap.timeline();
	
			heroTimeline.to('#greeting', {
				text: {
					value: i18next.t('Hi, nice to meet you!'),
					delimiter: ' '
				},
				duration: 0.5,
				ease: 'none',
				opacity: 1
			})
			.fromTo(
				'#title', 
				{
					opacity: 0
				},
				{
					borderLeftWidth: 4,
					duration: 0.2,
					opacity: 1
				}
			)
			.fromTo('#title-1', 
				{
					opacity: 0
				},
				{
					text: i18next.t("I'm"),
					duration: 0.1,
					ease: 'none',
					opacity: 1,
				}
			)
			.fromTo('#title-2', 
				{
					opacity: 0
				},
				{
					text: "Gabriel<br>",
					duration: 0.2,
					ease: 'none',
					opacity: 1,
			})
			.fromTo('#title-3', 
				{
					opacity: 0
				},
				{
					text: "Souza Costa",
					duration: 0.5,
					ease: 'none',
					opacity: 1
				}, 
				1
			)
			// .to('#title-4', {
			// 	text: 'Web & Mobile<br>Developer',
			// 	duration: 0.7,
			// 	ease: 'none',
			// })
			.to('#introduction', {
				text: i18next.t('My goal is to create the best digital experiences \nthat are easy on the eyes and pleasant to use.'),
				duration: 1.2,
				ease: 'none',
			}, 1)
			.to('.planet-image', {
				opacity: 1,
			}, 1)
			.to('.planet-image', {
				repeat: -1,
				y: -1,
				yoyo: true,
			}, 1.1)
			.to(
				'#contact-link', 
				{
					duration: 0.05,
					opacity: 1,
					ease: 'power3',
				},
				1.6
			)
			.to('#hero-top-right-border', {
				width: 160,
				height: 160,
				opacity: 1,
				borderRightWidth: 4,
				borderTopWidth: 4,
			}, 1)
			.to('#hero-bottom-right-border', {
				width: 48,
				height: 48,
				opacity: 1,
				borderRightWidth: 4,
				borderBottomWidth: 4,
			}, 1)
			.fromTo(
				'#projects-link', 
				{
					opacity: 0,
				},
				{
					duration: 0.75,
					opacity: 1,
					ease: 'none',
				},
				1.8
			)
			.to('#social-links', {
				duration: 1,
				opacity: 1,
				height: 160,
			}, 1)
	
			gsap.fromTo(
				'#about-me-paragraph', 
				{
					// opacity: 0
				},
				{
					scrollTrigger: '#about-me-paragraph',
					text: `
						${i18next.t("Hello there! I'm a developer")}
						<strong class="uppercase text-primary-600 dark:text-primary-400"> Front End </strong>
						${i18next.t("who is always looking for creating appealing, accessible, and user-friendly web applications. I've been immersed in technology since childhood, exploring Flash games and the web, modding games, learning and interacting with different devices and softwares.")}
					`,
					duration: 2,
					ease: 'none',
					// opacity: 1
				}, 
			)
	
			gsap.fromTo(
				'#about-me-paragraph-2', 
				{
					// opacity: 0
				},
				{
					scrollTrigger: '#about-me-paragraph',
					text: `
						${i18next.t("I like watching anime, some series and films, going to the gym or practicing Muay Thai. I am very interested in learning about")}
						<strong class="uppercase text-primary-600 dark:text-primary-400">
								design
						</strong> 
						${i18next.t("apart from programming.")}
					`,
					duration: 1.5,
					delay: 2,
					ease: 'none',
					// opacity: 1
				}, 
			)
	
			gsap.fromTo(
				"#profile-pic", 
				{
					opacity: 0,
					marginTop: -120,
				},
				{
					scrollTrigger: '#profile-pic',
					opacity: 1,
					marginTop: 0,
					duration: 0.8,
					delay: 1.5,
				},
			);
	
			gsap.fromTo(
				"#experience-sections", 
				{
					opacity: 0,
				},
				{
					scrollTrigger: '#experience-sections',
					opacity: 1,
					duration: 2,
					delay: 0.5,
				},
			)
	
			gsap.to("#tech-list li", {
				scrollTrigger: '#experience-sections',
				opacity: 1,
				duration: 1,
				delay: 1,
				stagger: {
					from: 'start',
					amount: 1
				}
			});
	
			let projects = gsap.utils.toArray('#projects-list li')
	
			projects.forEach(project => {
				gsap.to(project, {
					scrollTrigger: project,
					opacity: 1,
					duration: 1,
					delay: 0.5,
				});
			})
	
			gsap.to("#services-website", {
				scrollTrigger: '#services > div',
				opacity: 1,
				marginTop: 0,
				duration: 0.6,
				delay: 0.3,
			}); 
	
			gsap.to("#services-app", {
				scrollTrigger: '#services > div',
				opacity: 1,
				marginTop: 0,
				duration: 0.6,
				delay: 0.5,
			});
	
			gsap.fromTo(
				"#contact", 
				{
					opacity: 0,
					marginTop: 100,
				},
				{
					scrollTrigger: '#contact',
					opacity: 1,
					marginTop: 0,
					duration: 0.5,
					delay: 0.3,
				},
			);
			isAnimating = false;
		}
  }

	
