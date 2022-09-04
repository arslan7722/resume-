import React, { useRef } from "react";
import "./contactMe.css";
import emailjs from "@emailjs/browser";
import { createStyles, Text, Title, SimpleGrid, Group } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  AllBack: {
    backgroundColor: "#111",
    height: 700,
  },

  wrapper: {
    boxSizing: "border-box",
    padding: theme.spacing.xl * 2.5,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      padding: theme.spacing.xl * 1.5,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    color: theme.white,
    lineHeight: 1,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    maxWidth: 480,

    [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
      maxWidth: "100%",
    },
  },

  form: {
    padding: theme.spacing.xl,
    borderRadius: theme.radius.md,
    boxShadow: theme.shadows.lg,
  },

  control: {
    backgroundColor: "crimson",

    "&:hover": {
      backgroundColor: "crimson",
    },
  },
}));

export function ContactMe() {
  const { classes } = useStyles();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "resume-me",
        "template_3rhynji",
        form.current,
        "UlbwroJNHAPjmmj3i"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div id="contact" className={classes.AllBack}>
        <div data-aos="fade-down" className="main-skills">
          <h2 className="theme-contact">Contact me</h2>
        </div>
        <div className={classes.wrapper}>
          <SimpleGrid
            cols={2}
            spacing={50}
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <div data-aos="zoom-in-right">
              <Title className={classes.title}>Get in Touch</Title>
              <Text className={classes.description} mt="sm" mb={30}>
                If you wanna get in touch, talk to me about a project
                collaboration or just say hi, fill up the awesome form below or
                send an email to wayndix4@gmail.com and ~ let's talk.
              </Text>

              <div className="all-info-me">
                <Group className="tag-info-contact">Name</Group>
                <span className="info-me-contact">Azigaliev Aslan</span>

                <Group className="tag-info-contact">Address</Group>
                <span className="info-me-contact">Bishkek city</span>

                <Group className="tag-info-contact">Email</Group>
                <span className="info-me-contact">
                  azigalievaslanbek@gmail.com
                </span>

                <Group className="tag-info-contact">Phone</Group>
                <span className="info-me-contact">+996 500 84 15 45</span>
              </div>
            </div>
            <div className={classes.form}>
              <form ref={form} onSubmit={sendEmail}>
                <div data-aos="zoom-in" className="inp-all-send">
                  <input
                    className="inp-the"
                    type="email"
                    placeholder="Email"
                    name="email_id"
                  />
                  <input
                    className="inp-the"
                    type="name"
                    placeholder="Name"
                    name="from_name"
                  />
                  <textarea
                    className="inp-the allbackty"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                  <div className="but-all-the">
                    <input
                      type="submit"
                      value="Send Message"
                      className="sendClick"
                    />
                  </div>
                </div>
              </form>
            </div>
          </SimpleGrid>
        </div>
      </div>
    </>
  );
}
