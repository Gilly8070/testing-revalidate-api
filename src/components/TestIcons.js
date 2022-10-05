import React, { useState } from 'react';
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaTelegram, FaTwitterSquare, FaWhatsappSquare } from "react-icons/fa";
const TestIcons = () => {
    const [showText, setShowText] = useState(false);

    const copyToClipboard = () => {
        setShowText(true);
        setTimeout(() => {
            setShowText(false);
        }, 2000)
    }
    let text = encodeURIComponent('HEy There!')
    let copyUrl = `https://portfolio-site-with-links.vercel.app/`
    return (
        <div className='d-flex align-items-center email-link-cont email-link-cont-selected'>
            <div className='mr-1'>
            </div>
            <div className='d-flex flex-column position-relative'>
                <div>
                    <p className='mb-0 email-link-title color-white'>Share Job Description as Link</p>
                    <span className='email-link-subtitle color-white'>An online link where candidates can view description and apply</span>
                </div>
                <div className='d-flex align-items-center'>
                    <div className='d-flex align-items-center'>
                        <a
                            href={`https://www.linkedin.com/shareArticle?url=${copyUrl}`}
                            target="_blank" rel="noreferrer">
                            <BsLinkedin className='cursor-pointer share-link-logo' style={{ fontSize: '27px', color: '#4170b1', marginRight: '5px' }} />
                        </a>
                        <a
                            href={`https://web.whatsapp.com/send?text=${text} ${copyUrl}`}
                            target="_blank" rel="noreferrer">
                            <FaWhatsappSquare className='cursor-pointer share-link-logo' style={{ fontSize: '32px', color: '#49a83f', marginRight: '5px' }} />
                        </a>
                        <a
                            href={`https://twitter.com/intent/tweet?url=${copyUrl}&title=${text}`}
                            target="_blank" rel="noreferrer">
                            <FaTwitterSquare className='cursor-pointer share-link-logo' style={{ fontSize: '32px', color: '#1da1f2', marginRight: '5px' }} />
                        </a>    
                        <a
                            href={`https://www.facebook.com/sharer.php?u=${copyUrl}`}
                            target="_blank" rel="noreferrer">
                            <BsFacebook className='cursor-pointer share-link-logo' style={{ fontSize: '31px', color: '#1876f3', marginRight: '5px' }} />
                        </a>
                        <a
                            href={`https://telegram.me/share/url?url=${copyUrl}&text=${text}`}
                            target="_blank" rel="noreferrer">
                            <FaTelegram className='cursor-pointer share-link-logo' style={{ fontSize: '31px', color: '#00ace3', marginRight: '8px' }} />
                        </a>
                    </div>
                    <div className='position-relative'> 
                        <button className='copy-link-btn cursor-pointer' onClick={copyToClipboard}>Copy Link</button>
                        <p className={`d-none ${showText && 'link-copied'}`}>Link copied</p>
                    </div>
                </div>
            </div>
            <div className='ribbon-email-link' >Hello</div>
        </div>
    );
}

export default TestIcons