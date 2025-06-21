import { useGSAP } from "@gsap/react"
import { openingHours, socials } from "../../constants"
import gsap from "gsap"
import { SplitText } from "gsap/all"

const Contact = () => {
    useGSAP(() => {
        const titleSplit = SplitText.create('#contact h2', {
            type: 'words'
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center'
            },
            ease: 'power1.inOut'
        })

        tl
        .from(titleSplit.words, {
            opacity: 0, yPercent: 100, stagger: 0.02
        })
        .from('#contact h3, #contact p', {
            opacity: 0, yPercent: 100, stagger: 0.02
        })
        .to('#f-right-leaf', {
            y: -50, duration: 1, ease: 'power1.inOut'
        })
        .to('#f-left-leaf', {
            y: 50, duration: 1, ease: 'power1.inOut'
        }, '<')
    })

  return (
    <div id="contact">
        <img src="/images/footer-right-leaf.png" alt="right leaf" id="f-right-leaf" />
        <img src="/images/footer-left-leaf.png" alt="left leaf" id="f-left-leaf" />

        <div className="content">
            <h2>Where to Find Us</h2>

            <div>
                <h3>Visit Our Bar</h3>
                <p>456, Raq Blvd. #404, Los Angeles, CA 90210</p>
            </div>

            <div>
                <h3>Contact Us</h3>
                <p>(055) 987-6543</p>
                <p>hello@cocktail.com</p>
            </div>

            <div>
                <h3>Open Everyday</h3>
                {openingHours.map((time) => (
                    <p key={time}>{time.day} : {time.time}</p>
                ))}
            </div>

            <div>
                <h3>Socials</h3>
                <div className="flex-center gap-5">
                    {socials.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                        >
                            <img src={social.icon} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact