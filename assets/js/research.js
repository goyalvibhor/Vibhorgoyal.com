/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title: "​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​TB YTD Qliksense Dashboard",
        authors: "Vibhor Goyal",
        conferences: "This policy level dashboard contains the required data elements to better analyze technical & manual adjustments.  This dashboard is updated before the Daily Incremental Load completes.",
        researchYr: 2018,
        citebox: "popup1",
        image: "assets/images/project-page/Claim.jpg",
        citation: "",
        abstract: "This is currently left empty and this can be considered as a dummy data 1",
        absbox: "absPopup1"
    },

    {
        title: "Workforce Management QlikSense Dashboard",
        authors: "Vibhor Goyal, Tarun Jain",
        conferences: "The Workforce Management app enables a manager of a team of Field Engineers to monitor and analyze their performance and the current workload of the team. Work orders/calls can be analyzed by a number of factors such as call type, geographical location, time and date. Having all of these attributes available, enables the manager to spot trends, chase open calls, monitor emergencies and also assess engineers training requirements/skills gaps.",
        researchYr: 2017,
        citebox: "popup2",
        image: "assets/images/project-page/Workforce.jpg",
        citation: {
            vancouver: "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 2",
        absbox: "absPopup2"
    },

    {
        title: "Operational Dashboard Report",
        authors: "Vibhor Goyal",
        conferences: "The Operational Dashboard report in Excel is a look at annual revenue, expense and volume data from an operational perspective.  It features a number of sparklines and some neat conditional formatting with Excel shapes to generate a one pager with a lot of relevant data.  The dashboard is from a banking perspective but could be manipulated to include just about any data set or organisational type.",
        researchYr: 2019,
        citebox: "popup3",
        image: "assets/images/project-page/OpExcel.png",
        citation: {
            vancouver: "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
        },
        abstract: "This is currently left empty and this can be considered as a dummy data 3",
        absbox: "absPopup3"
    }
];
AOS.init();
const fillData = () => {
    let output = "";
    research.forEach(
        ({ image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract }) =>
        (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->

                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
    );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

