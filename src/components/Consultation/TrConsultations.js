import React from "react";
import details from "../../global/images/responsability.png";
import deletes from "../../global/images/delete.png";
import edit from "../../global/images/edit.png";
import review from "../../global/images/review.png";
import { NavLink } from "react-router-dom";

const TrConsultations = ({
  consultation,
  onDelete,
  onReply,
  onEdit,
  forReviews,
  onAddReview
}) => {
  const createDate = new Date(consultation.created_at);
  const consultationDate = `${createDate.getFullYear()}-${
    createDate.getMonth() + 1
  }-${createDate.getDate()}`;
  return (
    <tr>
      <td>{consultation.doctor.specialization.name}</td>
      <td>
        {consultation.doctor.first_name} {consultation.doctor.last_name}
      </td>
      <td>{consultation.symptoms}</td>
      <td>{consultation.additional_explanation}</td>
      <td>{consultation.done ? "Done" : "Pending"}</td>
      <td>{consultationDate}</td>
      <td>
        {!forReviews && (
          <div className="flex justify-between items-center w-[60%] m-auto">
            <img
              className="w-6 cursor-pointer"
              src={deletes}
              onClick={() => onDelete(consultation.id)}
              alt=""
            />
            {!consultation.done && (
              <img
                className="w-6 cursor-pointer"
                src={edit}
                onClick={() => onEdit(consultation)}
                alt=""
              />
            )}
            {consultation.done && (
              <img
                className="w-6 cursor-pointer"
                src={details}
                onClick={() => onReply(consultation)}
                alt=""
              />
            )}
            <NavLink to={`/Aafia/ConReview/${consultation.id}`}>
              <img
                className="w-6 cursor-pointer"
                src={review}
                  // onClick={() => nav("/Aafia/ConReview/2")}
                alt=""
              />
            </NavLink>
          </div>
        )}
        {forReviews && (
          <div className="flex justify-center items-center w-[50%] m-auto">
            <p className="text-[var(--gray-color)] font-thin opacity-[85%]">
              +
            </p>
            <img
              className="w-6 cursor-pointer"
              src={review}
              alt="Add Review"
              onClick={() => onAddReview(consultation)}
            />
          </div>
        )}
      </td>
    </tr>
  );
};

export default TrConsultations;