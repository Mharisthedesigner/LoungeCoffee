
const navbar = document.querySelector(".navbar");
document.querySelector("#menu").onclick = () => {
  navbar.classList.toggle('active');
}

const closebtn = document.getElementById('close');
closebtn.addEventListener('click', () => {
  navbar.classList.remove('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const counters = [
    { id: 'counter1', start: 0, end: 10, duration: 7000 },
    { id: 'counter2', start: 0, end: 100, duration: 7000 },
    { id: 'counter3', start: 0, end: 5, duration: 7000 }
  ];

  const counterSection = document.getElementById('counter-section');
  const options = {
    threshold: 0.5 // Trigger when 50% of section is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => {
          animateCounter(counter.id, counter.start, counter.end, counter.duration);
        });
        observer.unobserve(counterSection); // Run only once
      }
    });
  }, options);

  observer.observe(counterSection);

  // 👇 This function actually animates the numbers
  function animateCounter(id, start, end, duration) {
    const element = document.getElementById(id);
    let startTime = null;

    function updateCounter(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const value = Math.floor(progress * (end - start) + start);
      element.textContent = value + '+';
      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    }

    requestAnimationFrame(updateCounter);
  }
});

gsap.registerPlugin(ScrollTrigger);

function createBottleAnimations() {
  const mm = gsap.matchMedia();

  mm.add("(max-width: 2600px)", () => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "60% 50%",
        end: "150% 50%",
        scrub: 0.5,
      }
    });

    tl.to("#c3", {
      top: "130%",   // move downward
      left: "35%",   // horizontal
      scale: 1,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends

  });

    mm.add("(max-width: 2600px)", () => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "80% 50%",
        end: "200% 50%",
        scrub: 0.5,
      }
    });

    tl.to("#c3", {
      top: "187%",   // move downward
      left: "18%",   // horizontal
      scale: 0.3,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends

  });

  mm.add("(max-width: 1950px)", () => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "60% 50%",
        end: "135% 50%",
        scrub: 0.5,
      }
    });

    tl.to("#c3", {
      top: "125%",   // move downward
      left: "30%",   // horizontal
      scale: 1,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });


  mm.add("(max-width: 1950px)", () => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "54% 50%",
        end: "260% 50%",
        scrub: 0.5,
      }
    });

    tl2.to("#c3", {
      top: "179%",   // move downward
      left: "18%",   // horizontal
      scale: 0.3,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });



  mm.add("(max-width: 1450px)", () => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "60% 50%",
        end: "135% 50%",
        scrub: 0.5,
      }
    });

    tl.to("#c3", {
      top: "135%",   // move downward
      left: "35%",   // horizontal
      scale: 1,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });

  mm.add("(max-width: 1450px)", () => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "56% 50%",
        end: "250% 50%",
        scrub: 0.5,
      }
    });

    tl2.to("#c3", {
      top: "195%",   // move downward
      left: "20%",   // horizontal
      scale: 0.3,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });



  mm.add("(max-width: 1366px)", () => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "60% 50%",
        end: "135% 50%",
        scrub: 0.5,
      }
    });

    tl.to("#c3", {
      top: "134%",   // move downward
      left: "35%",   // horizontal
      scale: 1,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });

  mm.add("(max-width: 1366px)", () => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "59% 50%",
        end: "250% 50%",
        scrub: 0.5,         // ❌ No scrub → No reverse
      }
    });
    tl2.to("#c3", {
      top: "190%",   // move downward
      left: "20%",   // horizontal
      scale: 0.3,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });

    mm.add("(max-width: 1280px)", () => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "59% 50%",
        end: "250% 50%",
        scrub: 0.5,         // ❌ No scrub → No reverse
      }
    });
    tl2.to("#c3", {
      top: "193%",   // move downward
      left: "20%",   // horizontal
      scale: 0.3,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });


  mm.add("(max-width: 1080px)", () => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "60% 50%",
        end: "135% 50%",
        scrub: 0.5,
      }
    });

    tl.to("#c3", {
      top: "140%",   // move downward
      left: "35%",   // horizontal
      scale: 1.3,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none",
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });

  mm.add("(max-width: 1080px)", () => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "80% 50%",
        end: "230% 50%",
        scrub: 0.5,
      }
    });

    tl2.to("#c3", {
      top: "190%",   // move downward
      left: "22%",   // horizontal
      scale: 0.4,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });



  mm.add("(max-width: 990px)", () => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "60% 50%",
        end: "145% 50%",
        scrub: 0.5,
      }
    });

    tl.to("#c3", {
      top: "165%",   // move downward
      left: "40%",   // horizontal
      scale: 1.3,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });

  mm.add("(max-width: 990px)", () => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "79% 50%",
        end: "250% 50%",
        scrub: 0.5,
      }
    });

    tl2.to("#c3", {
      top: "240%",   // move downward
      left: "36%",   // horizontal
      scale: 0.4,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });

  mm.add("(max-width: 770px)", () => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "60% 50%",
        end: "300% 50%",
        scrub: 0.5,
      }
    });

    tl.to("#c3", {
      top: "238%",   // move downward
      left: "52%",   // horizontal
      scale: 0.5,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });

  mm.add("(max-width: 750px)", () => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "60% 50%",
        end: "300% 50%",
        scrub: 0.5,
      }
    });

    tl2.to("#c3", {
      top: "250%",   // move downward
      left: "58%",   // horizontal
      scale: 0.7,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });

  mm.add("(max-width: 660px)", () => {
    var tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "60% 50%",
        end: "300% 50%",
        scrub: 0.5,
      }
    });

    tl3.to("#c3", {
      top: "240%",   // move downward
      left: "58%",   // horizontal
      scale: 0.6,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });


  mm.add("(max-width: 600px)", () => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "60% 50%",
        end: "135% 50%",
        scrub: 0.5,
      }
    });

    tl.to("#c3", {
      top: "155%",   // move downward
      left: "35%",   // horizontal
      scale: 1,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });


  mm.add("(max-width: 450px)", () => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "100% 50%",
        end: "140% 50%",
        scrub: 0.5,
      }
    });

    tl.to("#c3", {
      top: "215%",   // move downward
      left: "35%",   // horizontal
      scale: 1.3,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });

  mm.add("(max-width: 450px)", () => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "86% 50%",
        end: "300% 50%",
        scrub: 0.5,
      }
    });

    tl2.to("#c3", {
      top: "293%",   // move downward
      left: "57%",   // horizontal
      scale: 0.6,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });

  mm.add("(max-width: 421px)", () => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "90% 50%",
        end: "320% 50%",
        scrub: 0.5,
      }
    });

    tl2.to("#c3", {
      top: "286%",   // move downward
      left: "57%",   // horizontal
      scale: 0.6,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });


  mm.add("(max-width: 400px)", () => {
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "100% 50%",
        end: "140% 50%",
        scrub: 0.5,
      }
    });

    tl.to("#c3", {
      top: "195%",   // move downward
      left: "35%",   // horizontal
      scale: 1.4,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });


  mm.add("(max-width: 400px)", () => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "94% 50%",
        end: "320% 50%",
        scrub: 0.5,
      }
    });

    tl2.to("#c3", {
      top: "268%",   // move downward
      left: "57%",   // horizontal
      scale: 0.6,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });

  mm.add("(max-width: 390px)", () => {
    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "94% 50%",
        end: "300% 50%",
        scrub: 0.5,
      }
    });

    tl2.to("#c3", {
      top: "263%",   // move downward
      left: "55%",   // horizontal
      scale: 0.5,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });


  mm.add("(max-width: 376px)", () => {
    var tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "98% 50%",
        end: "350% 50%",
        scrub: 0.5,
      }
    });

    tl3.to("#c3", {
      top: "261%",   // move downward
      left: "56%",   // horizontal
      scale: 0.5,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });

    mm.add("(max-width: 340px)", () => {
    var tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "94% 50%",
        end: "650% 50%",
        scrub: 0.5,
      }
    });

    tl4.to("#c3", {
      top: "448%",   // move downward
      left: "35%",   // horizontal
      scale: 1.3,      // grow
      rotate: 5,     // slight rotation while moving
      ease: "none"
    })
      .to("#c3", {
        rotate: -5,     // straighten at the end
        ease: "none"
      }, "<"); // "<" means start at the same time as previous animation ends
  });




}

// ✅ Run after everything is loaded
window.addEventListener("load", createBottleAnimations);




window.addEventListener("load", () => {
    const bar = document.querySelector(".loading-bar");
    const loader = document.getElementById("loader");
    const left = document.querySelector(".left-split");
    const right = document.querySelector(".right-split");
    const barWrap = document.querySelector(".loading-bar-wrapper");

    setTimeout(() => {
        bar.style.width = "100%";
    }, 200);

    setTimeout(() => {
        barWrap.classList.add("fade-out");

        left.classList.add("left-slide-out");
        right.classList.add("right-slide-out");

        setTimeout(() => {
            loader.style.display = "none";
            document.body.style.overflow = "auto";

            // ⭐⭐⭐ BOTTLES SLIDE-IN AFTER LOADER ⭐⭐⭐
            gsap.fromTo("#c1",
                { opacity: 0, x: 200 },
                { opacity: 1, x: 0, duration: 1, ease: "power3.out" }
            );

            gsap.fromTo("#c2",
                { opacity: 0, x: 200 },
                { opacity: 1, x: 0, duration: 1, delay: 0.2, ease: "power3.out" }
            );

            gsap.fromTo("#c3",
                { opacity: 0, x: 200 },
                { opacity: 1, x: 0, duration: 1, delay: 0.4, ease: "power3.out" }
            );

            gsap.fromTo("#c4",
                { opacity: 0, x: 200 },
                { opacity: 1, x: 0, duration: 1, delay: 0.6, ease: "power3.out" }
            );

        }, 1400);

    }, 3000);
});



// Detect when the "Work" section is in the viewport
window.addEventListener('scroll', function () {
  const workSection = document.getElementById('footer');
  const icon = document.querySelector('.uppericon');

  const sectionPosition = workSection.getBoundingClientRect();

  // Check if the Work section is in view
  if (sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= 0) {
    icon.style.display = 'block';  // Show the icon
  } else {
    icon.style.display = 'none';   // Hide the icon when out of view
  }
});




