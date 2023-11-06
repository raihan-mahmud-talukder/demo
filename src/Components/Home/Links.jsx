import { Link } from "react-router-dom"

export const Links = () => {
    return (
        <div className="links">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.529768505552!2d90.29943855708406!3d23.783881466988937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c1ca5b0feadf%3A0xcb8801eb698ca68d!2sZaita%20Agro!5e1!3m2!1sen!2sbd!4v1696258149953!5m2!1sen!2sbd" width="250" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div>
                <h3>Contact Us</h3><br />
                <p>
                    Plot no: 44, Block: K, <br />
                    Modhumoti Model Town, <br />
                    Bongaon, Amin Bazar, <br />
                    Dhaka, Bangladesh <br /><br />
                    <b>Cell:</b> +880 483-4543 <br /><br />
                    <b>Fax:</b> +880 483-4543 <br /><br />
                    <b>Email:</b> info@rongdhonu.com
                </p>
            </div>
            <div>
                <h3>Quick Links</h3><br />
                <ul>
                    <li>News</li>
                    <li>Blog</li>
                    <li>Career</li>
                    <li>Events</li>
                    <li>Notice</li>
                    <li>Payment</li>
                    <li>Disability</li>
                    <li>Tuition Fees</li>
                    <li>Co-Curriculum</li>
                    <li>Site Map</li>
                </ul>
            </div>
            <div>
                <h3>Important Links</h3><br />
                <ul>
                    <li><Link to="/about">Why Rongdhonu?</Link></li>
                    <li><Link to="/contact">Request Info</Link></li>
                    <li><Link to="/scolarship">Scholarship</Link></li>
                    <li><Link to="/intership">Internship</Link></li>
                    <li><Link to="/placement">Placement</Link></li>
                    <li><Link to="/newsletter">Newsletter</Link></li>
                    <li><Link to="/magazine">Magazine</Link></li>
                    <li><Link to="/journal">Journal</Link></li>
                    <li><Link to="/podcast">Podcast</Link></li>
                    <li><Link to="/Research">Research</Link></li>
                </ul>
            </div>
            <div>
                <h3>External Links</h3><br />
                <ul>
                    <li><Link to="http://bcc.gov.bd" target="_blank">BCC</Link></li>
                    <li><Link to="http://ugc.gov.bd" target="_blank">UGC</Link></li>
                    <li><Link to="http://nctb.gov.bd" target="_blank">NCTB</Link></li>
                    <li><Link to="http://www.naem.gov.bd" target="_blank">NAEM</Link></li>
                    <li><Link to="http://banbeis.gov.bd" target="_blank">BANBEIS</Link></li>
                    <li><Link to="http://dpe.gov.bd" target="_blank">DG Primary</Link></li>
                    <li><Link to="http://dshe.gov.bd" target="_blank">DG Secondary</Link></li>
                    <li><Link to="http://mopme.gov.bd" target="_blank">Primary Minstry</Link></li>
                    <li><Link to="http://moedu.gov.bd" target="_blank">Education Minstry</Link></li>
                    <li><Link to="http://educationboard.gov.bd" target="_blank">Education Board</Link></li>
                </ul>
            </div>
        </div>
    )
}