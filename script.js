document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("nav ul li a");
    const content = document.querySelector("main");

    // Define the content for each tab
    const sections = {
        about: `
            <section class="about-container">
                <div class="about-text">
                    <h2>About Me</h2>
                    <p>I am a Postdoctoral Research Fellow in Statistics at the University of Michigan, Ann Arbor. My research advisor is <a href="https://sites.google.com/umich.edu/elevina">link Dr. Liza Levina</a>. My research interests are in network analysis, bootstrapping, subsampling, conformal prediction, and uncertainty quantification. </p>
                </div>
                <div class="about-image">
                    <img src="profile-pic.jpg" alt="Your Photo" class="profile-pic">
                </div>
            </section>
        `,
        education: `
            <section class="tab-content">
                <h2>Education</h2>
                <ul>
                    <li><strong>University of Illinois Urbana-Champaign</strong> (2018-2024) - PhD in Statistics. Advisors: <a href="https://publish.illinois.edu/yuguo/">link Dr. Yuguo Chen</a> and <a href="https://sites.google.com/ncsu.edu/srijansengupta">link Dr. Srijan Sengupta</a> </li>
                    <li><strong>Indian Statistical Institute</strong> (2016-2018) - M.Stat in Statistics. Thesis Advisor: <a href="https://www.isical.ac.in/~probal/">link Dr. Probal Chaudhuri</a> </li>
                    <li><strong>St. Xavier’s College</strong> (2013-2016) - B.Sc. in Statistics</li>
                </ul>
            </section>
        `,
        research: `
            <section class="tab-content">
                <h2>Research</h2>
                <h3>Interests</h3>
                <p>Network analysis, scalable algorithms for large networks, machine learning, statistical computation.</p>
                <h3>Publications</h3>
                <ul>
                    <li>Chakrabarty, S., Sengupta, S., Chen, Y. (2024). Subsampling Based Community Detection for Large Networks. <a href="https://www3.stat.sinica.edu.tw/ss_newpaper/SS-2022-0108_na.pdf">Statistica Sinica</a>.</li>
                    <li>Chakrabarty, S., Mudar, R., Chen, Y., Husain, F. (2023). Contribution of Tinnitus and Hearing Loss to Depression. <a href="https://pubmed.ncbi.nlm.nih.gov/36828126/">Ear and Hearing</a>.</li>
                </ul>
            </section>
        `,
        experience: `
            <section class="tab-content">
                <h2>Experience</h2>
                <h3>Professional</h3>
                <p>Consultant at Illinois Statistics Office, providing statistical consulting and analysis.</p>
                <h3>Teaching</h3>
                <p>Instructor and teaching assistant for courses such as STAT 200, STAT 400, and more.</p>
            </section>
        `,
        contact: `
            <section class="tab-content">
                <h2>Contact</h2>
                <p>Email: <a href="mailto:sayanc3@illinois.edu">sayanc3@illinois.edu</a></p>
                <p>Email: <a href="mailto:sayanc2012@gmail.com">sayanc2012@gmail.com</a></p>
            </section>
        `
    };

    // Add click event listeners to tabs
    tabs.forEach(tab => {
        tab.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default link behavior
            const tabName = tab.getAttribute("data-tab"); // Get the tab name
            content.innerHTML = sections[tabName] || "<p>Content not found.</p>"; // Load the corresponding content
        });
    });
});
