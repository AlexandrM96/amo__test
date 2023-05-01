import React from "react";

import Link from "../../components/Link/Link";

import "./Footer.scss";

import { ABOUT_LINKS, MENU_LINKS_SECOND_COLUMN, MENU_LINKS_FIRST_COLUMN, CONTACT_LINKS } from "./FooterData";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__links">
        <div className="category">
          <h3 className="category__title">О компании</h3>
          {ABOUT_LINKS.map(el =>
            <li className="footer__linkItem">
              <Link key={el.title} text={el.title} url={el.url} type="footer" />
            </li>)}
        </div>

        <div className="category">
          <h3 className="category__title">Меню</h3>
          <div className="category__main">
            <ul className="category__column ">
              {MENU_LINKS_FIRST_COLUMN.map(el =>
                <li className="footer__linkItem">
                  <Link key={el.title} text={el.title} url={el.url} type="footer" />
                </li>)}
            </ul>
            <ul className="category__column">
              {MENU_LINKS_SECOND_COLUMN.map(el => {
                const classes = ["footer__linkItem"];
                el.onlyDesktop && classes.push("footer__linkItem_desktop");
                el.onlyMobile && classes.push("footer__linkItem_mobile");
                return (
                  <li className={classes.join(" ")}>
                    <Link key={el.title} text={el.title} url={el.url} type="footer" />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="category">
        <div className="category__contacts contacts">
          <h3 className="category__title">Контакты</h3>
          <Link text="+7 555 555-55-55" url="tel:+75555555555" type="phone" />
          <div className="contacts__socialLinks">
            {CONTACT_LINKS.map(el =>
              <li className="footer__linkItem">
                <Link key={el.alt} icon={el.icon} url={el.url} type="icon" />
              </li>
            )}
          </div>
          <p className="contacts__adress">Москва, Путевой проезд 3с1, к 902</p>
        </div>
        <div className="rights">
          <p className="rights__text">©WELBEX {currentYear}. Все права защищены.</p>
          <a className="privacy" href="#">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
