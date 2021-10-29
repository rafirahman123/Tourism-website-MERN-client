import React, { useState } from 'react';
import { Button, Collapse } from 'react-bootstrap';
import './Sport.css';

const Sports = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <div>
                <h4 className="text-info">Try Now</h4>
                <h1>Winter Sports</h1>
            </div>
            <div className="sport-video">
                <iframe className="m-5" src="https://www.youtube.com/embed/xd39Ho1kfqc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <div className="py-3">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex expedita repellat beatae impedit iste quidem, maiores, blanditiis eveniet laudantium ratione</p>
                <Button
                    onClick={() => setOpen(!open)}
                    aria-controls="example-collapse-text"
                    aria-expanded={open}
                >
                    ReadMore
                </Button>
                <Collapse in={open}>
                    <div id="example-collapse-text">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                        terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                        labore wes anderson cred nesciunt sapiente ea proident.
                    </div>
                </Collapse>
            </div>
        </div>
    );
};

export default Sports;
