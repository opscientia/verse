import { useState, useEffect, useRef } from 'react'
import { truncateAddress } from '../ui-helpers.js'
import { Modal } from './modals.js'

export const EditProfileButton = (props) => {
    const [visible, setVisible] = useState(false)
    return <>
            <a className="edit-icon-link w-inline-block" onClick={()=>setVisible(true)}>
                  <div class="edit-icon w-embed"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.24219 16.8749H3.75C3.58424 16.8749 3.42527 16.8091 3.30806 16.6919C3.19085 16.5747 3.125 16.4157 3.125 16.2499V12.7577C3.12472 12.6766 3.14044 12.5962 3.17128 12.5211C3.20211 12.446 3.24745 12.3778 3.30469 12.3202L12.6797 2.94524C12.7378 2.88619 12.8072 2.83929 12.8836 2.80728C12.9601 2.77527 13.0421 2.75879 13.125 2.75879C13.2079 2.75879 13.2899 2.77527 13.3664 2.80728C13.4428 2.83929 13.5122 2.88619 13.5703 2.94524L17.0547 6.42962C17.1137 6.48777 17.1606 6.5571 17.1927 6.63355C17.2247 6.71 17.2411 6.79205 17.2411 6.87493C17.2411 6.95781 17.2247 7.03987 17.1927 7.11632C17.1606 7.19277 17.1137 7.26209 17.0547 7.32024L7.67969 16.6952C7.62216 16.7525 7.55391 16.7978 7.47884 16.8287C7.40376 16.8595 7.32335 16.8752 7.24219 16.8749V16.8749Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                      <path d="M10.625 5L15 9.375" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg></div>
            </a>

            <Modal visible={visible} setVisible={setVisible}>
                <div className="card-heading"><h3 className="h3 no-margin">Name / Pseudonym</h3></div>
                <div className="spacer-small" />
                <input onChange={e=>console.log(e.target.value)} style={{height:"10px", width:"100%"}} type="email" class="text-field w-input" maxLength="32" placeholder="Enter name ..." required="" />
                
                <div className="spacer-medium" />
                
                <div className="card-heading"><h3 className="h3 no-margin">About Me</h3></div>
                <div className="spacer-small" />
                <input onChange={e=>console.log(e.target.value)} style={{height:"10px", width:"100%"}} type="email" class="text-field w-input" maxLength="128" placeholder="Enter Bio ..." required="" />
                
                <div className="spacer-medium" />

                <p><i>Note: proceeding will link this information publicly with your address {truncateAddress(props.account)} </i> <br /> But nothing stops you from being pseudonymous 😎</p>
                <div className='x-container w-container' style={{justifyContent: 'space-between'}}>
                      <a className='x-button' style={{width: '39%'}}>Submit</a> 
                      <a onClick={()=>setVisible(false)} className='x-button secondary' style={{width: '39%'}}>Cancel</a>
                </div>
            </Modal> 
        </>   

}