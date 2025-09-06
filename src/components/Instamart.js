import { useState } from "react";

const Section=({title, description,isVisible, setIsVisible}) => {
    return (
  <div className="border border-black p-2 m-2">
    <h3 className="font-bold text-xl">{title}</h3>
    {isVisible ? (
        <button 
        onClick={()=> setIsVisible(false)} 
        className="cursor-pointer underline"
    >
        Hide
        </button>
        ):(
    <button 
    onClick={()=> setIsVisible(true)} 
    className="cursor-pointer underline"
    >
        Show
        </button>
    )}

    {isVisible && <p>{description}</p>}
  </div>
  );
};

const Instamart = () => {
    const [visibleSection, setIsVisibleSection] = useState("about");
    return (
    <div>
        <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
        <Section
        title={"About instamart"}
        description={"Morbi vulputate fermentum enim, vel bibendum elit venenatis a. Nunc fermentum sapien enim, feugiat blandit ipsum interdum sed. Praesent ut quam condimentum, convallis libero id, congue arcu. Maecenas dictum purus vitae fringilla gravida. Nam ut dui id ipsum vulputate faucibus ut eget ante. In nisi erat, fringilla et ligula ac, fringilla rhoncus odio. In rutrum lobortis nunc at auctor. Nullam dignissim placerat justo malesuada elementum. Quisque tristique suscipit dolor, ullamcorper fermentum dui rutrum in. Duis fermentum arcu turpis, at interdum ipsum eleifend nec. Nunc pellentesque orci ut eros euismod fermentum. Etiam nibh mi, dapibus ac hendrerit ac, hendrerit vel elit. Morbi id mi nisl."
        }
        isVisible={visibleSection == "about"}
        setIsVisible={() => 
            setIsVisibleSection("about")
        }
        />
        
        <Section
        title={"Team instamart"}
        description={"Morbi vulputate fermentum enim, vel bibendum elit venenatis a. Nunc fermentum sapien enim, feugiat blandit ipsum interdum sed. Praesent ut quam condimentum, convallis libero id, congue arcu. Maecenas dictum purus vitae fringilla gravida. Nam ut dui id ipsum vulputate faucibus ut eget ante. In nisi erat, fringilla et ligula ac, fringilla rhoncus odio. In rutrum lobortis nunc at auctor. Nullam dignissim placerat justo malesuada elementum. Quisque tristique suscipit dolor, ullamcorper fermentum dui rutrum in. Duis fermentum arcu turpis, at interdum ipsum eleifend nec. Nunc pellentesque orci ut eros euismod fermentum. Etiam nibh mi, dapibus ac hendrerit ac, hendrerit vel elit. Morbi id mi nisl."    
        }
        isVisible={visibleSection =="team"}
        setIsVisible={() => 
            setIsVisibleSection("team")
        }/>
        
        <Section
        title={"Careers in instamart"}
        description={"Morbi vulputate fermentum enim, vel bibendum elit venenatis a. Nunc fermentum sapien enim, feugiat blandit ipsum interdum sed. Praesent ut quam condimentum, convallis libero id, congue arcu. Maecenas dictum purus vitae fringilla gravida. Nam ut dui id ipsum vulputate faucibus ut eget ante. In nisi erat, fringilla et ligula ac, fringilla rhoncus odio. In rutrum lobortis nunc at auctor. Nullam dignissim placerat justo malesuada elementum. Quisque tristique suscipit dolor, ullamcorper fermentum dui rutrum in. Duis fermentum arcu turpis, at interdum ipsum eleifend nec. Nunc pellentesque orci ut eros euismod fermentum. Etiam nibh mi, dapibus ac hendrerit ac, hendrerit vel elit. Morbi id mi nisl."
        }
        isVisible={visibleSection == "career"}
        setIsVisible={() => 
            setIsVisibleSection("career")
        }/>
        
        <Section
        title={"Contact instamart"}
        description={"Morbi vulputate fermentum enim, vel bibendum elit venenatis a. Nunc fermentum sapien enim, feugiat blandit ipsum interdum sed. Praesent ut quam condimentum, convallis libero id, congue arcu. Maecenas dictum purus vitae fringilla gravida. Nam ut dui id ipsum vulputate faucibus ut eget ante. In nisi erat, fringilla et ligula ac, fringilla rhoncus odio. In rutrum lobortis nunc at auctor. Nullam dignissim placerat justo malesuada elementum. Quisque tristique suscipit dolor, ullamcorper fermentum dui rutrum in. Duis fermentum arcu turpis, at interdum ipsum eleifend nec. Nunc pellentesque orci ut eros euismod fermentum. Etiam nibh mi, dapibus ac hendrerit ac, hendrerit vel elit. Morbi id mi nisl."
        }
        isVisible={visibleSection == "contact"}
        setIsVisible={() => 
            setIsVisibleSection("contact")
        }/>
    </div>
    );
};

export default Instamart;