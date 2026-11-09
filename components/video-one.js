import React, { Fragment, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SectionTitle from "@/components/section-title";
import { VideoOneData } from "@/data";
//import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.min.css";
import dynamic from "next/dynamic";

const ModalVideo = dynamic(() => import("react-modal-video"), { ssr: false });
const VideoOne = () => {
  const [isOpen, setOpen] = useState(false);
  const { sectionContent, video } = VideoOneData;
  return (
    <Fragment>
      <section className="commonSection our_work">
        <div className="videoWrap_2">
          <img src={video.image} alt={video.title} />
          <div className="play_video">
            <a
              onClick={(e) => {
                e.preventDefault();
                setOpen(true);
              }}
              href="https://www.youtube.com/watch?v=BpM_zYPzFlw&list=RDMMBpM_zYPzFlw&start_radio=1"
              className="video_popup"
            >
              <i className="fa fa-play"></i>
            </a>
            <h2>{video.title}</h2>
          </div>
        </div>
        <Container>
          <Row>
            <Col lg={6} sm={12}></Col>
            <Col lg={6} sm={12}>
              <div className="ab_detail_wrap">
                <SectionTitle data={sectionContent} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="BpM_zYPzFlw"
        onClose={() => setOpen(false)}
      />
    </Fragment>
  );
};

export default VideoOne;
