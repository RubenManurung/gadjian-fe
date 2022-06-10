import React from "react";
import styled from "./[card].module.css";
// import Logo from "../../../public/assets/gadjian_logo_tosca.png";
import RoundedImage from "../../atom/RoundedImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { formatEmptyData } from "../../../utils";
import moment from "moment";

const Index = ({ personnelsData }) => {
  return (
    <div className={styled.card}>
      <span className={styled.cardheader}>
        ID :{" "}
        <div className={styled.personnelId}>
          {formatEmptyData(personnelsData.id.name, personnelsData.id.value)}
        </div>
        <FontAwesomeIcon icon={faEllipsis} />
      </span>
      <hr className={styled.hr} />
      <div className={styled.contentContainer}>
        <div className={styled.imgContainer}>
          <RoundedImage
            img={personnelsData.picture.large}
            width={150}
            height={150}
            alt={formatEmptyData(
              personnelsData.id.name,
              personnelsData.id.value
            )}
          />
        </div>
        <section className={styled.container}>
          <h4 className={styled.cardTitle}>
            <b>Name</b>
          </h4>
          <p
            className={styled.cardDescription}
          >{`${personnelsData.name.title}. ${personnelsData.name.first} ${personnelsData.name.last}`}</p>
          <h4 className={styled.cardTitle}>
            <b>Telephone</b>
          </h4>
          <p className={styled.cardDescription}>{personnelsData.phone}</p>
          <div className={styled.mobileHide}>
            <h4 className={styled.cardTitle}>
              <b>Birthday</b>
            </h4>
            <p className={styled.cardDescription}>
              {moment(personnelsData.dob.date).format("lll")}
            </p>
            <h4 className={styled.cardTitle}>
              <b>Email</b>
            </h4>
            <p className={styled.cardDescription}>{personnelsData.email}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
