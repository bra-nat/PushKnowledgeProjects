import Title from "../components/title/title.component";
import Button from "../components/button/button.component";
import { BsFillFileEarmarkPostFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { BiCommentDetail } from "react-icons/bi";
import "./testimonial.styles.scss";

import React, { useEffect, useState } from "react";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState("");
  const [items, setItems] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, [testimonials]);

  return (
    <div>
      <Title text={"Testimonials"} />
      <Button
        text={"Post"}
        classes={"btn btn-info text-white me-2"}
        icon={<BsFillFileEarmarkPostFill />}
        onClick={() => setTestimonials("Posts")}
      />
      <Button
        text={"Users"}
        classes={"btn btn-info text-white me-2"}
        icon={<FaUserAlt />}
        onClick={() => setTestimonials("Users")}
      />
      <Button
        text={"Comments"}
        classes={"btn btn-info text-white me-2"}
        icon={<BiCommentDetail />}
        onClick={() => setTestimonials("Comments")}
      />

      <Title
        text={!testimonials ? "Select one from above" : testimonials}
        classes={"text-info mt-2"}
      />

      {!items
        ? null
        : items.map((item) => {
            return (
              <div className="card shadow border-info m-3 " key={item.id} style={{ maxWidth: '500px' }}>
                {item.name && <div className="card-header bg-info fs-4 text-white">Card Header</div>}

                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.body}</p>
                </div>

                {item.email && (
                  <small className="card-footer bg-info text-white">{item.email}</small>
                )}
              </div>
            );
          })}
    </div>
  );
};

export default Testimonial;
