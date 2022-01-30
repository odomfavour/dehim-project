import React from 'react';
import BlankBg from '../../layouts/BlankBg';
import checkMark from '../../images/checkmark-circle-outline.png'

const confirmation = () => {
    return (
        <BlankBg>
            <section className="p-5" style={{ width: 40 + '%', background: '#fff', borderRadius: 10 + 'px' }}>
                <div className="text-center">
                    <img src={checkMark} alt="" className='img-fluid my-5' />
                    <p>Welcome on board to Dehim</p>
                    <div class="d-grid gap-2 col-6 mx-auto">
                        <button class="btn btn-warning" type="button">Go to dashboard</button>
                    </div>
                </div>
            </section>
        </BlankBg>
    );
};

export default confirmation;
