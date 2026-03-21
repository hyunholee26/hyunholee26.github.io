// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/scholar.google.com/citations?hl=en&user=oOwJeyQAAAAJ&view_op=list_works&sortby=pubdate";
          },
        },{id: "nav-visitor-stats",
          title: "Visitor Stats",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/https:/statcounter.com/p13143291/?guest=1";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-i-received-the-2023-pat-gober-water-prize-student-research-proposal-competition-from-the-school-of-geographical-sciences-and-urban-planning-at-arizona-state-university",
          title: '🎉 I received the 2023 Pat Gober Water Prize (student research proposal competition)...',
          description: "",
          section: "News",},{id: "news-i-received-the-2024-anthony-j-brazel-research-award-from-the-school-of-geographical-sciences-and-urban-planning-at-arizona-state-university",
          title: '🎉 I received the 2024 Anthony J. Brazel Research Award from the School...',
          description: "",
          section: "News",},{id: "news-i-gave-an-oral-presentation-on-deep-active-learning-for-flood-inundation-mapping-with-multispectral-satellite-imagery-at-the-2024-aag-annual-meeting-in-honolulu-hawaii",
          title: '🚀 I gave an oral presentation on “Deep Active Learning for Flood Inundation...',
          description: "",
          section: "News",},{id: "news-my-first-author-paper-has-been-published-in-remote-sensing-of-environment-impact-factor-11-1",
          title: '📢 My first-author paper has been published in Remote Sensing of Environment (impact...',
          description: "",
          section: "News",},{id: "news-i-have-successfully-passed-the-comprehensive-exam-for-my-phd-program",
          title: '🎉 I have successfully passed the comprehensive exam for my PhD program.',
          description: "",
          section: "News",},{id: "news-i-presented-a-poster-titled-advancing-interpretability-of-deep-active-learning-in-flood-mapping-with-multispectral-imagery-at-the-2024-agu-fall-meeting-in-washington-d-c",
          title: '🚀 I presented a poster titled “Advancing Interpretability of Deep Active Learning in...',
          description: "",
          section: "News",},{id: "news-i-was-awarded-third-place-at-the-2025-aag-remote-sensing-specialty-group-rssg-student-honors-paper-competition-in-detroit-michigan",
          title: '🏅 I was awarded third place at the 2025 AAG Remote Sensing Specialty...',
          description: "",
          section: "News",},{id: "news-our-new-preprint-geospatial-artificial-intelligence-for-satellite-based-flood-extent-mapping-concepts-advances-and-future-perspectives-is-now-available-on-arxiv",
          title: '📢 Our new preprint “Geospatial Artificial Intelligence for Satellite-Based Flood Extent Mapping: Concepts,...',
          description: "",
          section: "News",},{id: "news-honored-to-be-part-of-the-prithvi-geospatial-ai-foundation-model-team-recipients-of-the-2025-agu-open-science-recognition-prize",
          title: '🏅 Honored to be part of the Prithvi-Geospatial AI Foundation Model Team, recipients...',
          description: "",
          section: "News",},{id: "news-i-have-passed-my-phd-proposal-defense-and-become-a-phd-candidate",
          title: '🎉 I have passed my PhD proposal defense and become a PhD candidate!...',
          description: "",
          section: "News",},{id: "news-i-presented-a-poster-titled-multimodal-post-flood-water-extent-mapping-with-sar-and-incomplete-multispectral-data-using-a-spatially-masked-adaptive-gated-network-at-the-2025-agu-fall-meeting-in-new-orleans-louisiana",
          title: '🚀 I presented a poster titled “Multimodal Post‑Flood Water Extent Mapping With SAR...',
          description: "",
          section: "News",},{id: "news-my-first-author-paper-has-been-accepted-in-isprs-journal-of-photogrammetry-and-remote-sensing-impact-factor-12-2",
          title: '📢 My first-author paper has been accepted in ISPRS Journal of Photogrammetry and...',
          description: "",
          section: "News",},{id: "news-i-gave-an-oral-presentation-on-evaluating-alignment-between-geoai-explanations-and-domain-knowledge-in-satellite-based-flood-mapping-at-the-2026-aag-annual-meeting-in-san-francisco-california",
          title: '🚀 I gave an oral presentation on “Evaluating Alignment Between GeoAI Explanations and...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
