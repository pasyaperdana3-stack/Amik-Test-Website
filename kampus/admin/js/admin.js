// ==========================
// AOS ANIMATION
// ==========================

AOS.init({
    duration: 1000,
    once: true
});


// ==========================
// COUNTER ANIMATION
// ==========================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");

    const speed = 40;

    const updateCounter = () => {

        const current = +counter.innerText;

        const increment = Math.ceil(target / speed);

        if (current < target) {

            counter.innerText = current + increment;

            setTimeout(updateCounter, 30);

        } else {

            counter.innerText = target.toLocaleString("id-ID");

        }

    };

    updateCounter();

});


// ==========================
// CHART.JS
// ==========================

const ctx = document.getElementById("studentChart");

if (ctx) {

    new Chart(ctx, {

        type: "bar",

        data: {

            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "Mei",
                "Jun"
            ],

            datasets: [{

                label: "Mahasiswa Baru",

                data: [
                    120,
                    180,
                    150,
                    230,
                    210,
                    260
                ],

                backgroundColor: [
                    "#FECACA",
                    "#FCA5A5",
                    "#F87171",
                    "#EF4444",
                    "#DC2626",
                    "#B91C1C"
                ],

                borderRadius: 12

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            plugins: {

                legend: {
                    display: false
                }

            },

            animation: {

                duration: 2000,

                easing: "easeOutBounce"

            },

            scales: {

                y: {

                    beginAtZero: true,

                    grid: {

                        color: "#f1f5f9"

                    }

                },

                x: {

                    grid: {

                        display: false

                    }

                }

            }

        }

    });

}


// ==========================
// QUICK ACTION EFFECT
// ==========================

const actionCards = document.querySelectorAll(".action-card");

actionCards.forEach(card => {

    card.addEventListener("click", () => {

        alert(
            "Fitur ini masih dalam tahap pengembangan 🚀"
        );

    });

});


// ==========================
// LOGOUT
// ==========================

const logoutBtn = document.querySelector(".logout-btn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", () => {

        const confirmLogout = confirm(
            "Apakah Anda yakin ingin logout?"
        );

        if (confirmLogout) {

            localStorage.removeItem("adminLogin");

            window.location.href = "../index.html";

        }

    });

}


// ==========================
// NOTIFICATION ANIMATION
// ==========================

const notification = document.querySelector(".notification");

if (notification) {

    setInterval(() => {

        notification.classList.add("animate-bell");

        setTimeout(() => {

            notification.classList.remove("animate-bell");

        }, 1000);

    }, 6000);

}


// ==========================
// GREETING BY TIME
// ==========================

const welcomeTitle = document.querySelector(".welcome-box h2");

if (welcomeTitle) {

    const hour = new Date().getHours();

    let greeting = "Selamat Datang";

    if (hour >= 5 && hour < 12) {

        greeting = "Selamat Pagi";

    }

    else if (hour >= 12 && hour < 15) {

        greeting = "Selamat Siang";

    }

    else if (hour >= 15 && hour < 18) {

        greeting = "Selamat Sore";

    }

    else {

        greeting = "Selamat Malam";

    }

    welcomeTitle.innerHTML =
        `${greeting}, Admin AMIK 🚀`;

}

// ======================
// SPA SIDEBAR
// ======================

const menuItems =
document.querySelectorAll(".menu-item");

const sections =
document.querySelectorAll(".content-section");


menuItems.forEach(item=>{

    item.addEventListener("click",()=>{

        menuItems.forEach(menu=>{

            menu.classList.remove("active");

        });

        item.classList.add("active");


        sections.forEach(section=>{

            section.classList.remove(
                "active-section"
            );

        });


        const target =
        item.dataset.target;


        document
            .getElementById(target)
            .classList
            .add("active-section");

    });

});