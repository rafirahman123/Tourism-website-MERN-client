import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <>
            <div className="blog-text m-5">
                <h1 className="text-center text-info">Our Blogs</h1>
            </div>
            <div className="blogs-section">
                <div class="blog-card">
                    <img src="https://i.ibb.co/NVpvmJF/onmyway.jpg" class="blog-image" alt="" />
                    <h1 className="blog-title">1. PS I’m On My Way</h1>
                    <p class="blog-overview">Apart from a great name, PS I’m On My Way boasts a fun, exciting, and action-packed travel blog. The homepage makes an immediate impact on new and returning viewers with a full-screen image and bright eye-catching color scheme. The use of a parallax effect, combined with rows of article images and a beautiful full-width background image with text overlay, helps break up the page and give it a dynamic feel.</p>
                </div>
                <div class="blog-card">
                    <img src="https://i.ibb.co/GV8vdfb/poor.jpg" class="blog-image" alt="" />
                    <h1 className="blog-title">2. The Poor Traveler</h1>
                    <p class="blog-overview">The Poor Traveler uses a full-screen slider that displays awe-inspiring images which will immediately connect with wanna-be travelers. An Agoda search bar sits at the bottom of this slider. This helps visitors find accommodation in their chosen city, which in turn, aids the monetization of the blog.</p>
                </div>
                <div class="blog-card">
                    <img src="https://i.ibb.co/4pPDLPF/food.jpg" class="blog-image" alt="" />
                    <h1 className="blog-title">3. Migrationology</h1>
                    <p class="blog-overview">Migrationoloy is a travel food blog that is well laid out, organized, and very easy to navigate. The homepage uses full-screen video media to appeal to fellow or wanna-be travelers, and it works. The rest of the homepage is divided into sections, displaying full-width images with text overlay, a search tool, latest blog articles, and ‘Join Me’ buttons leading to an email signup form.</p>
                </div>
                <div class="blog-card">
                    <img src="https://i.ibb.co/kHC3k1V/standard.jpg" class="blog-image" alt="" />
                    <h1 className="blog-title">4. Scandinavian Standard</h1>
                    <p class="blog-overview">Scandinavian Standard is a minimal, sleek and sophisticated travel and lifestyle blog that is extremely easy on the eye. The design and layout make for a calm and relaxing environment. This ensures visitors are at no point overwhelmed with a magnitude of information, as so often is the case with jam-packed travel blogs.</p>
                </div>
                <div class="blog-card">
                    <img src="https://i.ibb.co/cTRKFdK/wanderland.jpg" class="blog-image" alt="" />
                    <h1 className="blog-title">5. Helen in Wonderlust</h1>
                    <p class="blog-overview">Helen in Wonderlust is a stunning travel portfolio site that puts bold and bright images at the forefront of its blog. Bright, colorful and packed full of interesting and helpful information, this site easily stands out in the crowd of travel blogs.</p>
                </div>
                <div class="blog-card">
                    <img src="https://i.ibb.co/BBLpgR0/adams.jpg" class="blog-image" alt="" />
                    <h1 className="blog-title">6. Travels of Adam</h1>
                    <p class="blog-overview">Travels of Adam is extremely user-friendly, with categories well laid out and displayed on the homepage. Quickly browse featured posts, latest posts, city guides, popular destinations and lots more. The blog’s author displays his About Me info on the homepage, so his visitors can quickly see who he is, where he is traveling, and understand what they will find on his blog.</p>
                </div>
            </div>
        </>
    );
};

export default Blogs;