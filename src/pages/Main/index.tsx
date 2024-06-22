import { useNavigate } from "react-router-dom";

import style from "./style.module.scss";
import Exchange from "@components/Exchange";

function App() {
  const navigate = useNavigate();

  const navigateToTransaction = () => {
    navigate(`/transaction`);
  };


  return (
    <div className={style.mainPage}>
      <div className="page-wrapper">
        <div
          data-animation="default"
          className="navbar w-nav"
          data-easing2="ease-in-out-quart"
          data-easing="ease-in-out-quart"
          data-collapse="all"
          role="banner"
          data-duration="600"
          id="navbar"
          data-doc-height="1"
        >
          <div id="navbar-backdrop" className="navbar_backdrop hide"></div>
          {/* <nav role="navigation" className="navbar_menu w-nav-menu">
            <div className="navbar_menu-circle"></div>
            <div className="navbar_menu-container">
              <div className="navbar_menu-links">
                <a
                  href="/"
                  aria-current="page"
                  className="navbar_menu-link w-nav-link w--current"
                >
                  Home
                </a>
                <div className="navbar_menu-link disable-link">Company</div>
                <a
                  href="/about"
                  className="navbar_menu-link sub-link w-nav-link"
                >
                </a>
                <a
                  href="https://docs.topperpay.com/intro/"
                  target="_blank"
                  className="navbar_menu-link w-nav-link"
                >
                  API Docs
                </a>
              </div>
              <div className="navbar_menu-footer">
                <div className="navbar_menu-footer-cta">
                  <a
                    href="#"
                    className="button is-icon get-started-button mobile-full-width tablet-full-width w-inline-block"
                  >
                    <div className="button_text">Buy Crypto</div>
                    <div className="icon-24 z-index-2 w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M14.03 4.72a.75.75 0 1 0-1.06 1.06l5.47 5.47H3.75a.75.75 0 0 0 0 1.5h14.69l-5.47 5.47a.75.75 0 1 0 1.06 1.06l6.75-6.75a.747.747 0 0 0 0-1.06l-6.75-6.75Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="text-size-small text-color-neutral-400">
                </div>
              </div>
            </div>
          </nav> */}
          <div className="navbar_container">
            <a
              href="/"
              aria-current="page"
              className="logoStyle"
              aria-label="home"
            >
              <div>Exmobit</div>
              {/* <div className="navbar_logo is-default w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 240 56"
                >
                  <path
                    fill="#84FB7F"
                    fillRule="evenodd"
                    d="M47.6551 29.0684c2.2025 3.8148.8954 8.6928-2.9194 10.8952l-9.5643 5.522c-3.8148 2.2025-8.6928.8954-10.8953-2.9194-2.2025-3.8148-.8954-8.6927 2.9194-10.8952l9.5643-5.522c3.8148-2.2025 8.6928-.8954 10.8953 2.9194ZM37.2044 10.9658c2.2025 3.8148.8954 8.6928-2.9194 10.8953L11.9652 34.7475c-3.81484 2.2025-8.69282.8954-10.8953-2.9194-2.20248-3.8148-.895433-8.6928 2.91938-10.8953L26.3091 8.04646c3.8149-2.20248 8.6928-.89543 10.8953 2.91934Z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    d="M75.3558 41.1844h-4.8002v-24.53h-9.0711v-4.3088h23.0181v4.3088h-9.1468v24.53Zm15.9608.4157c-2.0662 0-3.9057-.4661-5.5183-1.3985-1.6127-.9323-2.8726-2.23-3.7797-3.893-.8819-1.6882-1.3229-3.6159-1.3229-5.7829 0-2.0914.441-3.956 1.3229-5.5939.9071-1.663 2.167-2.9481 3.7797-3.8552 1.6126-.9323 3.4521-1.3985 5.5183-1.3985s3.9056.4662 5.5183 1.3985c1.6126.9071 2.8725 2.1922 3.7801 3.8552.907 1.6379 1.36 3.5025 1.36 5.5939 0 2.1418-.453 4.0569-1.36 5.7451-.8824 1.6631-2.1297 2.9733-3.7423 3.9308-1.6127.9324-3.4647 1.3985-5.5561 1.3985Zm0-3.893c1.1591 0 2.2048-.3024 3.1371-.9071.9323-.63 1.6504-1.4867 2.1544-2.5702.5291-1.0835.7937-2.3182.7937-3.7041 0-1.3103-.2646-2.4945-.7937-3.5529-.504-1.0835-1.2221-1.9276-2.1544-2.5323-.9323-.6048-1.978-.9071-3.1371-.9071-1.1591 0-2.2048.3023-3.1371.9071-.9324.5795-1.6631 1.4111-2.1922 2.4946-.504 1.0583-.756 2.2551-.756 3.5906 0 1.4111.2646 2.6584.7938 3.7419.5291 1.0835 1.2472 1.9276 2.1544 2.5324.9323.6047 1.978.9071 3.1371.9071Zm25.1144-18.0668c1.839 0 3.452.4662 4.838 1.3985 1.411.9071 2.507 2.1922 3.288 3.8552.781 1.6631 1.172 3.5655 1.172 5.7073s-.391 4.0442-1.172 5.7073c-.781 1.663-1.877 2.9607-3.288 3.893-1.386.9072-2.999 1.3607-4.838 1.3607-1.336 0-2.495-.2394-3.477-.7181-.983-.4788-1.928-1.3229-2.835-2.5324v10.5831h-4.46V20.0561h4.46v2.8725c.907-1.2095 1.839-2.0536 2.797-2.5324.983-.5039 2.154-.7559 3.515-.7559Zm-.907 3.8553c-1.134 0-2.142.3023-3.024.9071-.882.6047-1.575 1.4489-2.079 2.5324-.504 1.0835-.756 2.3055-.756 3.6662s.252 2.5828.756 3.6663 1.197 1.9276 2.079 2.5324c.882.6047 1.89.9071 3.024.9071 1.738 0 3.124-.6678 4.157-2.0032 1.034-1.3355 1.55-3.0364 1.55-5.1026s-.516-3.767-1.55-5.1025c-1.033-1.3355-2.419-2.0032-4.157-2.0032Zm24.705-3.8553c1.84 0 3.453.4662 4.838 1.3985 1.411.9071 2.508 2.1922 3.289 3.8552.781 1.6631 1.171 3.5655 1.171 5.7073s-.39 4.0442-1.171 5.7073c-.781 1.663-1.878 2.9607-3.289 3.893-1.385.9072-2.998 1.3607-4.838 1.3607-1.335 0-2.494-.2394-3.477-.7181-.983-.4788-1.927-1.3229-2.835-2.5324v10.5831h-4.46V20.0561h4.46v2.8725c.908-1.2095 1.84-2.0536 2.797-2.5324.983-.5039 2.155-.7559 3.515-.7559Zm-.907 3.8553c-1.134 0-2.141.3023-3.023.9071-.882.6047-1.575 1.4489-2.079 2.5324-.504 1.0835-.756 2.3055-.756 3.6662s.252 2.5828.756 3.6663 1.197 1.9276 2.079 2.5324c.882.6047 1.889.9071 3.023.9071 1.739 0 3.125-.6678 4.158-2.0032 1.033-1.3355 1.55-3.0364 1.55-5.1026s-.517-3.767-1.55-5.1025c-1.033-1.3355-2.419-2.0032-4.158-2.0032Zm23.61 18.1045c-2.066 0-3.906-.4661-5.518-1.3985-1.588-.9575-2.823-2.2552-3.704-3.893-.882-1.6631-1.323-3.5277-1.323-5.5939 0-1.915.39-3.7167 1.171-5.4049.807-1.6882 1.991-3.0489 3.553-4.082 1.588-1.0331 3.49-1.5497 5.708-1.5497 1.864 0 3.59.4032 5.178 1.2095 1.612.7811 2.897 1.978 3.855 3.5907.983 1.6126 1.474 3.5906 1.474 5.934v1.1339h-16.404c.151.9827.391 1.7639.718 2.3434.504 1.1843 1.222 2.1166 2.155 2.797.957.6803 2.041 1.0205 3.25 1.0205 1.285 0 2.381-.3276 3.289-.9827.932-.6804 1.6-1.5245 2.003-2.5324h4.611c-.68 2.1922-1.865 3.9812-3.553 5.3671-1.688 1.3607-3.843 2.041-6.463 2.041Zm5.745-13.5689c-.101-.7812-.328-1.4489-.68-2.0033-.504-.8819-1.197-1.5496-2.079-2.0032-.882-.4787-1.865-.7181-2.948-.7181-1.109 0-2.092.2394-2.948.7181-.857.4536-1.55 1.1213-2.079 2.0032-.328.504-.58 1.1717-.756 2.0033h11.49Zm8.267 13.1532V20.0561h4.46v2.6457c.831-1.1087 1.738-1.8898 2.721-2.3433 1.008-.4536 2.192-.6804 3.553-.6804h.491v4.3466h-1.134c-1.688 0-2.985.4536-3.893 1.3607-1.159 1.0835-1.738 2.9481-1.738 5.5939v10.2051h-4.46Zm24.157-14.5466v-8.8691h.69v3.4826c.517-.733 1.33-1.1973 2.235-1.1973 1.715 0 2.873 1.3433 2.873 3.3764 0 2.0332-1.171 3.3633-2.873 3.3633-.958 0-1.781-.5175-2.235-1.1841v1.0249h-.69v.0033Zm.69-1.6087c.371.6103 1.224 1.1443 2.116 1.1443 1.436 0 2.249-1.1841 2.249-2.7396 0-1.5556-.813-2.753-2.249-2.753-.892 0-1.742.5572-2.116 1.1709v3.1774Zm6.372 3.483c.146.0663.398.1061.557.1061.424 0 .72-.1725.972-.7861l.504-1.1443-2.713-6.4777h.773l2.341 5.612 2.315-5.612h.786l-3.323 7.8343c-.345.8126-.892 1.1973-1.648 1.1973-.213 0-.505-.0398-.677-.0928l.119-.6368h-.006Zm-2.899 12.0773c-.465.5175-1.264 1.0117-2.276 1.0117-1.383 0-2.059-.7198-2.059-2.0332v-4.5473h1.396v4.0431c0 .9984.504 1.3035 1.29 1.3035.707 0 1.317-.398 1.649-.8391v-4.5075h1.396v6.4246h-1.396v-.8558Zm4.47 3.2954h-1.396v-8.8691h1.396v.879c.478-.6368 1.224-1.0382 2.06-1.0382 1.662 0 2.846 1.2505 2.846 3.3632 0 2.1128-1.184 3.3765-2.846 3.3765-.813 0-1.542-.3582-2.06-1.0514v3.34Zm1.649-7.7944c-.65 0-1.344.3847-1.649.8656v2.5407c.305.4644.999.8657 1.649.8657 1.104 0 1.807-.8922 1.807-2.1427 0-1.2504-.706-2.1293-1.807-2.1293Zm8.959 5.3496v-4.0431c0-.9984-.518-1.3035-1.304-1.3035-.706 0-1.317.4245-1.648.8657V41.44h-1.397v-8.869h1.397v3.3234c.424-.5042 1.263-1.0382 2.275-1.0382 1.383 0 2.073.7198 2.073 2.0332v4.5473h-1.396v.0033Zm2.683-3.2203c0-1.8341 1.263-3.3632 3.297-3.3632 2.033 0 3.31 1.5291 3.31 3.3632 0 1.8342-1.251 3.3765-3.31 3.3765-2.06 0-3.297-1.529-3.297-3.3765Zm5.161 0c0-1.131-.664-2.1293-1.861-2.1293s-1.848.9983-1.848 2.1293c0 1.1311.664 2.1427 1.848 2.1427 1.184 0 1.861-.9984 1.861-2.1427Zm2.769 3.2203v-8.869h1.396v8.869h-1.396Zm7.649-.878c-.491.6368-1.238 1.0382-2.06 1.0382-1.649 0-2.859-1.2505-2.859-3.3633s1.197-3.3765 2.859-3.3765c.799 0 1.542.3715 2.06 1.0515v-3.3367H240v8.8691h-1.396v-.8823Zm0-3.602c-.319-.4776-.999-.8657-1.662-.8657-1.105 0-1.808.8922-1.808 2.1426 0 1.2505.707 2.1294 1.808 2.1294.663 0 1.343-.3715 1.662-.8524V36.96Z"
                  ></path>
                </svg>
              </div> */}
            </a>
            <div className="navbar_nav">
              <div className="navbar_nav-links">
                <a id="blog-link" href="/blog" className="navbar_nav-link"></a>
              </div>
              <div className="navbar_nav-cta-wrapper">
                <a
                  onClick={navigateToTransaction}
                  className="button is-icon navbar_button get-started-button w-inline-block"
                >
                  <div className="button_text">Buy Crypto</div>
                  <div className="icon-24 z-index-2 w-embed">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        d="M14.03 4.72a.75.75 0 1 0-1.06 1.06l5.47 5.47H3.75a.75.75 0 0 0 0 1.5h14.69l-5.47 5.47a.75.75 0 1 0 1.06 1.06l6.75-6.75a.747.747 0 0 0 0-1.06l-6.75-6.75Z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div
            className="w-nav-overlay"
            data-wf-ignore=""
            id="w-nav-overlay-0"
            style={{ display: "none" }}
          ></div>
        </div>
        <div
          id="w-node-_662b14b7-2ae3-f67f-a083-e5b5de336559-de336559"
          className="error-toast-wrapper"
        >
          <div className="error-toast">
            <div className="error-toast-content">
              <div className="toast-title">
                It seems that something went wrong.
              </div>
              <div className="toast-description">
                Please, try refreshing or come back again in a few moments.
              </div>
            </div>
            <div className="error-toast-close">
              <div className="icon-24 w-embed">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g opacity="0.5">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.2803 5.78033C19.5732 5.48744 19.5732 5.01256 19.2803 4.71967C18.9874 4.42678 18.5126 4.42678 18.2197 4.71967L12 10.9393L5.78033 4.71967C5.48744 4.42678 5.01256 4.42678 4.71967 4.71967C4.42678 5.01256 4.42678 5.48744 4.71967 5.78033L10.9393 12L4.71967 18.2197C4.42678 18.5126 4.42678 18.9874 4.71967 19.2803C5.01256 19.5732 5.48744 19.5732 5.78033 19.2803L12 13.0607L18.2197 19.2803C18.5126 19.5732 18.9874 19.5732 19.2803 19.2803C19.5732 18.9874 19.5732 18.5126 19.2803 18.2197L13.0607 12L19.2803 5.78033Z"
                      fill="#58181A"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <main className="main-wrapper">
          <section className="section_main-header">
            <div className="section_main-header-grid">
              <div className="widget-background"></div>

              <div className="section_main-header-content-wrapper">
                <h1 className="section_main-header-title">
                  <span className="text-color-primary-dark-500 text-weight-bold">
                    Instantly add{" "}
                  </span>
                  crypto to your digital wallet!
                </h1>
                <div id="homepage-hero-cta" className="section_main-header-cta">
                  <a
                    onClick={navigateToTransaction}
                    className="button is-icon get-started-button mobile-full-width w-inline-block"
                  >
                    <div className="button_text">Buy Crypto</div>
                    <div className="icon-24 z-index-2 w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fill="currentColor"
                          fillRule="evenodd"
                          d="M14.03 4.72a.75.75 0 1 0-1.06 1.06l5.47 5.47H3.75a.75.75 0 0 0 0 1.5h14.69l-5.47 5.47a.75.75 0 1 0 1.06 1.06l6.75-6.75a.747.747 0 0 0 0-1.06l-6.75-6.75Z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </a>
                </div>
                <div className="section_main-header-description-wrapper">
                  <div className="section_main-header-description-item">
                    <div className="section_main-header-description-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.0303 4.71967C13.7374 4.42678 13.2626 4.42678 12.9697 4.71967C12.6768 5.01256 12.6768 5.48744 12.9697 5.78033L18.4393 11.25H3.75C3.33579 11.25 3 11.5858 3 12C3 12.4142 3.33579 12.75 3.75 12.75H18.4393L12.9697 18.2197C12.6768 18.5126 12.6768 18.9874 12.9697 19.2803C13.2626 19.5732 13.7374 19.5732 14.0303 19.2803L20.7803 12.5303C20.9268 12.3839 21 12.1919 21 12C21 11.8983 20.9798 11.8013 20.9431 11.7129C20.9065 11.6245 20.8522 11.5416 20.7803 11.4697L14.0303 4.71967Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="section_main-header-description">
                      Choose your purchase amount
                      <br />
                    </div>
                  </div>
                  <div className="section_main-header-description-item">
                    <div className="section_main-header-description-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.0303 4.71967C13.7374 4.42678 13.2626 4.42678 12.9697 4.71967C12.6768 5.01256 12.6768 5.48744 12.9697 5.78033L18.4393 11.25H3.75C3.33579 11.25 3 11.5858 3 12C3 12.4142 3.33579 12.75 3.75 12.75H18.4393L12.9697 18.2197C12.6768 18.5126 12.6768 18.9874 12.9697 19.2803C13.2626 19.5732 13.7374 19.5732 14.0303 19.2803L20.7803 12.5303C20.9268 12.3839 21 12.1919 21 12C21 11.8983 20.9798 11.8013 20.9431 11.7129C20.9065 11.6245 20.8522 11.5416 20.7803 11.4697L14.0303 4.71967Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="section_main-header-description">
                      Input your wallet address
                      <br />
                    </div>
                  </div>
                  <div className="section_main-header-description-item">
                    <div className="section_main-header-description-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M14.0303 4.71967C13.7374 4.42678 13.2626 4.42678 12.9697 4.71967C12.6768 5.01256 12.6768 5.48744 12.9697 5.78033L18.4393 11.25H3.75C3.33579 11.25 3 11.5858 3 12C3 12.4142 3.33579 12.75 3.75 12.75H18.4393L12.9697 18.2197C12.6768 18.5126 12.6768 18.9874 12.9697 19.2803C13.2626 19.5732 13.7374 19.5732 14.0303 19.2803L20.7803 12.5303C20.9268 12.3839 21 12.1919 21 12C21 11.8983 20.9798 11.8013 20.9431 11.7129C20.9065 11.6245 20.8522 11.5416 20.7803 11.4697L14.0303 4.71967Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="section_main-header-description">
                      Confirm and submit your order
                      <br />
                    </div>
                  </div>
                  <div className="section_main-header-description-item last-item">
                    <div className="section_main-header-description-icon w-embed">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.53104 19.281L21.531 7.28104C21.6718 7.14031 21.7508 6.94944 21.7508 6.75042C21.7508 6.55139 21.6718 6.36052 21.531 6.21979C21.3903 6.07906 21.1994 6 21.0004 6C20.8014 6 20.6105 6.07906 20.4698 6.21979L9.00042 17.6901L4.28104 12.9698C4.14031 12.8291 3.94944 12.75 3.75042 12.75C3.55139 12.75 3.36052 12.8291 3.21979 12.9698C3.07906 13.1105 3 13.3014 3 13.5004C3 13.6994 3.07906 13.8903 3.21979 14.031L8.46979 19.281C8.53945 19.3508 8.62216 19.4061 8.71321 19.4438C8.80426 19.4816 8.90185 19.501 9.00042 19.501C9.09898 19.501 9.19657 19.4816 9.28762 19.4438C9.37867 19.4061 9.46139 19.3508 9.53104 19.281Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="section_main-header-description text-weight-bold">
                      Done!
                      <br />
                    </div>
                  </div>
                </div>
              </div>
              <div className="section_main-header-img-wrapper hide-tablet hide-mobile-landscape hide-mobile-portrait">
                <div className="widget-wrapper">
                  <div className="widget-iframe widget-border">
                    <div className="widget-iframe-background">
                      <Exchange
                        navigateToTransaction={navigateToTransaction}
                      ></Exchange>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="section-group">
            <section className="section-group_one">
              <div className="section-one_wrapper">
                <div className="section-one_grid">
                  <h2 className="section-one_title">
                    Where business meets{" "}
                    <span className="text-color-primary-light-600">
                      crypto power
                    </span>
                  </h2>
                  <div
                    id="w-node-fc4d7eb1-5d7c-af5d-520d-102777d1d93e-4933b8fe"
                    className="section-one_circle-wrapper"
                  >
                    <img
                      src="https://assets-global.website-files.com/63a5d5c7760c9d1c97ca0efc/6526a5007cb52b7ff50e06fb_business-asset.webp"
                      loading="lazy"
                      sizes="(max-width: 479px) 100vw, (max-width: 991px) 600px, 900px"
                      srcSet="
                      https://assets-global.website-files.com/63a5d5c7760c9d1c97ca0efc/6526a5007cb52b7ff50e06fb_business-asset-p-500.webp 500w,
                      https://assets-global.website-files.com/63a5d5c7760c9d1c97ca0efc/6526a5007cb52b7ff50e06fb_business-asset-p-800.webp 800w,
                      https://assets-global.website-files.com/63a5d5c7760c9d1c97ca0efc/6526a5007cb52b7ff50e06fb_business-asset.webp       900w
                    "
                      alt=""
                      className="section-one_image"
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="section-group_two">
              <div className="section-two_wrapper">
                <div className="section-two_grid">
                  <div
                    id="w-node-_758c6020-da79-05a3-94e6-dfe0bda0498e-4933b8fe"
                    data-w-id="758c6020-da79-05a3-94e6-dfe0bda0498e"
                    className="section-two_text-wrapper"
                  >
                    <h2 className="section-group_title text-color-white">
                      The highest{" "}
                      <span className="text-color-primary-dark-500">
                        approval
                      </span>{" "}
                      rates
                    </h2>
                    <div
                      fade-in-up=""
                      className="section-group_description text-color-white"
                    >
                      Complete more payments.
                    </div>
                  </div>
                  <div
                    id="w-node-d070c29e-ba19-b48d-1cb9-f5fb47364c15-4933b8fe"
                    className="section-two_shape-wrapper"
                  >
                    <div className="section-two_image-wrapper">
                      <img
                        src="https://assets-global.website-files.com/63a5d5c7760c9d1c97ca0efc/6527a34113d8b4cda2d1756a_asset-approval-rates.webp"
                        loading="lazy"
                        sizes="(max-width: 479px) 33.390625px, (max-width: 767px) 7vw, (max-width: 991px) 400px, (max-width: 1439px) 68vw, 900px"
                        srcSet="
                        https://assets-global.website-files.com/63a5d5c7760c9d1c97ca0efc/6527a34113d8b4cda2d1756a_asset-approval-rates-p-500.webp   500w,
                        https://assets-global.website-files.com/63a5d5c7760c9d1c97ca0efc/6527a34113d8b4cda2d1756a_asset-approval-rates-p-800.webp   800w,
                        https://assets-global.website-files.com/63a5d5c7760c9d1c97ca0efc/6527a34113d8b4cda2d1756a_asset-approval-rates-p-1080.webp 1080w,
                        https://assets-global.website-files.com/63a5d5c7760c9d1c97ca0efc/6527a34113d8b4cda2d1756a_asset-approval-rates-p-1600.webp 1600w,
                        https://assets-global.website-files.com/63a5d5c7760c9d1c97ca0efc/6527a34113d8b4cda2d1756a_asset-approval-rates.webp        1800w
                      "
                        alt="+60%"
                        className="section-two_image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <footer id="footer" className="footer">
          <div className="footer_padding-global">
            <div className="w-layout-grid footer_grid">
              <div
                id="w-node-_1f307d45-d1ea-63e4-cdcc-bb45ec6f119f-ec6f1194"
                className="footer_bottom"
              >
                <div className="divider-line"></div>
                <div className="footer_bottom-wrapper">
                  <div className="footer_bottom-inner-wrapper">
                    <div className="text-size-small">Exmobit</div>
                    <div id="current-year" className="text-size-small">
                      2024
                    </div>
                    <div className="text-size-small">All Rights Reserved</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div
          id="w-node-_16435157-f742-eec8-8eb2-dca5eb6357a9-4933b8fe"
          className="mobile_cta homepage"
        >
          <a
            onClick={navigateToTransaction}
            className="button is-icon get-started-button mobile-full-width w-inline-block"
          >
            <div className="button_text">Buy Crypto</div>
            <div className="icon-24 z-index-2 w-embed">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M14.03 4.72a.75.75 0 1 0-1.06 1.06l5.47 5.47H3.75a.75.75 0 0 0 0 1.5h14.69l-5.47 5.47a.75.75 0 1 0 1.06 1.06l6.75-6.75a.747.747 0 0 0 0-1.06l-6.75-6.75Z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
