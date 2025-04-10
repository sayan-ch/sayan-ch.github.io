document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll("nav ul li a");
    const content = document.querySelector("main");

    // Define the content for each tab
    const sections = {
        about: `
            <section class="about-container">
                <section class="about-container">
            <div class="about-text">
                <h2>About Me</h2>
                <p>I am a Postdoctoral Research Fellow in Statistics at the University of Michigan, Ann Arbor. My postdoc advisor is <a href="https://sites.google.com/umich.edu/elevina">Dr. Liza Levina</a>. I received PhD in Statistics from the University of Illinois Urbana-Champaign. My PhD advisors were <a href="https://publish.illinois.edu/yuguo/">Dr. Yuguo Chen</a> and <a href="https://sites.google.com/ncsu.edu/srijansengupta">Dr. Srijan Sengupta</a>.</p> 
                <p>My research interests are in network analysis, bootstrapping, subsampling, conformal prediction, and uncertainty quantification. To learn more about my research, please click <a href="#research">here</a>.</p>
                <section class="info-box">
            <div class="info-box">
        <p>Email: sayanc ''at''  umich.edu</p>
        <p>Google Scholar: <a href="https://scholar.google.com/citations?user=nLr_7kcAAAAJ&hl=en">Link</a></p>
    </div>
        </section>
            </div>
            
            <div class="about-image">
                <img src="profile-pic.jpg" alt="Your Photo" class="profile-pic">
            </div>
        </section>
    </section>
        `,
        // education: `
        //     <section class="tab-content">
        //         <h2>Education</h2>
        //         <ul>
        //             <li><strong>University of Illinois Urbana-Champaign</strong> (2018-2024) - PhD in Statistics. Advisors: <a href="https://publish.illinois.edu/yuguo/">link Dr. Yuguo Chen</a> and <a href="https://sites.google.com/ncsu.edu/srijansengupta">link Dr. Srijan Sengupta</a> </li>
        //             <li><strong>Indian Statistical Institute</strong> (2016-2018) - M.Stat in Statistics. Thesis Advisor: <a href="https://www.isical.ac.in/~probal/">link Dr. Probal Chaudhuri</a> </li>
        //             <li><strong>St. Xavier’s College</strong> (2013-2016) - B.Sc. in Statistics</li>
        //         </ul>
        //     </section>
        // `,
        research: `
            <section class="tab-content">
                <h2>Research</h2>
                <h3>Interests</h3>
                <p>Network analysis, bootstrapping, subsampling, conformal prediction, and uncertainty quantification.</p>
                <h3>Publications</h3>
                <ul>
        <li>
            <strong>Chakrabarty, S.</strong>, Levina, E. (2025+). 
            <i>Network Bootstrap with Overlapping Partitions</i>. 
            In preparation.
        </li>        
        <li>
            <strong>Chakrabarty, S.</strong>, Sengupta, S., Chen, Y. (2025). 
            <i>Network Cross-Validation and Model Selection via Subsampling</i>. 
            ArXiv preprint, arXiv:2504.06903.
            <a href="https://arxiv.org/abs/2504.06903" target="_blank">Pre-print<\a>
        </li>
        <li>
            <strong>Chakrabarty, S.</strong>, Sengupta, S., Chen, Y. (2025). 
            <i>Subsampling Based Community Detection for Large Networks</i>. 
            <em>Statistica Sinica</em>, 35(3).
            <a href="https://www3.stat.sinica.edu.tw/ss_newpaper/SS-2022-0108_na.pdf" target="_blank">Pre-print</a>.
        </li>
        <li>
            Moran, C.R., Park, T.J., Buffenstein, R., <strong>Chakrabarty</strong>, S., Lindeblad, M.O., Fortman, J.D., Adams, C.R. (2024). 
            <i>Pharmacokinetics of Injectable Meloxicam and Buprenorphine in the Naked Mole-Rat (<em>Heterocephalus glaber</em>)</i>. 
            <em>Journal of the American Association for Laboratory Animal Science</em>, 63(5), 565-571. 
            <a href="https://pubmed.ncbi.nlm.nih.gov/39079747/" target="_blank">Article</a>.
        </li>
        <li>
            <strong>Chakrabarty, S.</strong>, Mudar, R., Chen, Y., Husain, F. (2024). 
            <i>Contribution of Tinnitus and Hearing Loss to Depression: NHANES Population Study</i>. 
            <em>Ear and Hearing</em> 45(3):775-786.
            <a href="https://journals.lww.com/ear-hearing/abstract/2024/05000/contribution_of_tinnitus_and_hearing_loss_to.22.aspx">Article</a>
        </li>
        <li>
            Han, M. D., Kwon, T. G., Miloro, M., <strong>Chakrabarty, S.</strong> (2023). 
            <i>What Is the Linear Accuracy of Regional Voxel-Based Registration for Orthognathic Surgery Landmarks?</i> 
            <em>Journal of Oral and Maxillofacial Surgery</em> (23) S0278-2391. 
            <a href="https://pubmed.ncbi.nlm.nih.gov/36828126/" target="_blank">Article</a>.
        </li>
        <li>
            Ghosh, A., SahaRay, R., <strong>Chakrabarty, S.</strong>, Bhadra, S. (2021). 
            <i>Robust Generalised Quadratic Discriminant Analysis</i>. 
            <em>Pattern Recognition</em> (117) 107981. 
            <a href="https://www.sciencedirect.com/science/article/abs/pii/S0031320321001680" target="_blank">Article</a>.
        </li>
    </ul>
            </section>
        // `,
        // experience: `
        //     <section class="tab-content">
        //         <h2>Experience</h2>
        //         <h3>Professional</h3>
        //         <p>Consultant at Illinois Statistics Office, providing statistical consulting and analysis.</p>
        //         <h3>Teaching</h3>
        //         <p>Instructor and teaching assistant for courses such as STAT 200, STAT 400, and more.</p>
        //     </section>
        // `,
    //     contact: `
    //         <section class="tab-content">
    //             <h2>Contact</h2>
    //             <p>Email: <a href="mailto:sayanc3@illinois.edu">sayanc3@illinois.edu</a></p>
    //             <p>Email: <a href="mailto:sayanc2012@gmail.com">sayanc2012@gmail.com</a></p>
    //         </section>
    //     `
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
