import React from "react";
import "./css/displayDetails.css";
import { Connect, useSelector } from "react-redux";

function truncateWord(word,maxlength){
  if(word.length > maxlength){
    return word.slice(0,maxlength)+"..."
  }

  return word;
}

function DisplayDetails() {
  const {formData} = useSelector((state) => state.form);
  console.log("Form:",formData)
  return (
    <div className="displayDetail">
      <h1>{formData.name}</h1>
      <div className="ContColumnCont">
        <div className="cont1Disp">
          <div className="dispStrip">
            <span className="svgSpan1" style={{background:""}}>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.246863 14.2892L0.246925 14.2891L1.28127 11.2462C0.461584 9.86273 0.121558 8.24676 0.314822 6.64943C0.509949 5.03671 1.23755 3.53517 2.38238 2.38264L2.38277 2.38225C3.74209 1.02896 5.5821 0.269202 7.5002 0.269202C9.4183 0.269202 11.2583 1.02896 12.6176 2.38225L12.6183 2.38291C13.8165 3.59839 14.5479 5.19737 14.6839 6.89875C14.8199 8.60012 14.3518 10.295 13.3618 11.6854C12.3719 13.0757 10.9235 14.0726 9.27123 14.5008C7.62973 14.9262 5.89145 14.7631 4.35813 14.0406L0.666456 14.77L0.656857 14.7719H0.647073L0.594205 14.7719L0.593948 14.7719M0.246863 14.2892L0.593948 14.6719V14.7719M0.246863 14.2892C0.228259 14.3443 0.223057 14.403 0.23169 14.4605C0.240323 14.518 0.262542 14.5726 0.296501 14.6198C0.330462 14.667 0.375185 14.7054 0.42696 14.7319C0.478659 14.7583 0.535901 14.772 0.593948 14.7719M0.246863 14.2892L0.593948 14.7719M4.40627 13.2836L4.39233 13.2835L4.3789 13.2872L4.33468 13.2995L1.1454 13.9343L2.03521 11.3124C2.03524 11.3123 2.03527 11.3122 2.0353 11.3122C2.05308 11.2604 2.05904 11.2054 2.05272 11.151C2.0464 11.0967 2.02795 11.0444 1.99874 10.9981C1.20966 9.74429 0.868088 8.26032 1.0296 6.78767C1.19111 5.31511 1.84614 3.94053 2.88813 2.88754C3.49373 2.28186 4.21271 1.80139 5.00401 1.47358C5.79539 1.14573 6.6436 0.976988 7.5002 0.976988C8.3568 0.976988 9.20501 1.14573 9.99638 1.47358C10.7877 1.80139 11.5067 2.28186 12.1123 2.88754C13.202 3.98514 13.8664 5.4342 13.987 6.97621C14.1075 8.51825 13.6763 10.053 12.7703 11.3066C11.8642 12.5602 10.5423 13.4512 9.04032 13.8205C7.53849 14.1899 5.95428 14.0137 4.57027 13.3235C4.51946 13.2976 4.4633 13.2839 4.40627 13.2836Z"
                  fill="#3CC952"
                  stroke="#3CC952"
                  stroke-width="0.2"
                />
                <path
                  d="M9.14943 11.3183L9.14945 11.3182C8.42103 11.2386 7.60837 10.8414 6.92168 10.4099C6.23293 9.97722 5.65743 9.5014 5.40082 9.25022L5.40006 9.24947C5.14824 8.99764 4.67155 8.42175 4.23857 7.7318C3.80679 7.04375 3.40954 6.22838 3.33135 5.4999L3.43077 5.48923M9.14943 11.3183L5.87718 3.33235M9.14943 11.3183L9.15487 11.3186C9.23956 11.3232 9.32443 11.3232 9.40913 11.3187C9.7956 11.3048 10.1746 11.2084 10.5207 11.0358C10.8669 10.8632 11.1721 10.6184 11.4158 10.318M9.14943 11.3183L11.4158 10.318M3.43077 5.48923L3.33136 5.50002C3.20356 4.32206 3.98924 3.52719 4.32479 3.24298C4.4912 3.10016 4.70577 3.0261 4.92484 3.03587L5.64145 3.05975L5.64182 3.05977C5.71401 3.06244 5.78379 3.08644 5.84236 3.12874C5.90087 3.17099 5.94556 3.22962 5.97081 3.29724M3.43077 5.48923C3.58218 6.8997 4.97937 8.68735 5.47077 9.17876L4.92093 3.13579C4.72697 3.127 4.53696 3.19256 4.38968 3.31907C4.06031 3.59798 3.30859 4.36298 3.43077 5.48923ZM5.97081 3.29724C5.97083 3.2973 5.97086 3.29736 5.97088 3.29742L5.87718 3.33235M5.97081 3.29724C5.97079 3.29717 5.97076 3.29711 5.97074 3.29705L5.87718 3.33235M5.97081 3.29724C6.05076 3.50911 6.21991 3.96728 6.36923 4.41856C6.44388 4.64417 6.51394 4.86917 6.56545 5.06133C6.6159 5.24951 6.65187 5.41774 6.65187 5.52376C6.65187 5.71419 6.56744 5.87706 6.4584 6.01533C6.35014 6.15261 6.21014 6.27473 6.08674 6.38238L6.08636 6.38271L6.08539 6.38355L6.08538 6.38355C6.05172 6.41216 6.0119 6.44716 5.97751 6.47935M5.87718 3.33235C6.03656 3.7547 6.55187 5.15985 6.55187 5.52376C6.55187 5.84251 6.27031 6.08954 6.02062 6.30735C5.96749 6.35251 5.89577 6.41626 5.85327 6.46142M5.97751 6.47935C5.96523 6.45743 5.95306 6.43546 5.941 6.41341L5.85327 6.46142M5.97751 6.47935C5.95789 6.4977 5.94004 6.51514 5.92609 6.52995L5.85327 6.46142M5.97751 6.47935C6.23387 6.93693 6.53735 7.36654 6.88304 7.76118M5.85327 6.46142C6.12174 6.95204 6.4433 7.41167 6.81218 7.83204M6.81218 7.83204L6.87813 7.75687C6.87977 7.75831 6.8814 7.75974 6.88304 7.76118M6.81218 7.83204C7.23259 8.20087 7.69222 8.52243 8.18281 8.79095M6.81218 7.83204L6.88735 7.76608C6.88591 7.76445 6.88448 7.76281 6.88304 7.76118M6.88304 7.76118C7.27739 8.10653 7.70662 8.4098 8.16376 8.66608M8.18281 8.79095L8.1121 8.72024C8.12742 8.70491 8.14517 8.68618 8.16376 8.66608M8.18281 8.79095C8.22466 8.7491 8.28248 8.68442 8.32667 8.635C8.33016 8.6311 8.33357 8.6273 8.33687 8.6236M8.18281 8.79095L8.23082 8.70323C8.2084 8.69096 8.18604 8.67857 8.16376 8.66608M8.16376 8.66608C8.19337 8.63405 8.22512 8.59855 8.25264 8.56778C8.25579 8.56426 8.25888 8.56079 8.26191 8.5574M8.33687 8.6236L8.26151 8.55787L8.26191 8.5574M8.33687 8.6236C8.55468 8.37392 8.80171 8.09235 9.13374 8.09235C9.49765 8.09235 10.9028 8.60767 11.3252 8.76704M8.33687 8.6236L8.26234 8.55692C8.2622 8.55708 8.26206 8.55724 8.26191 8.5574M8.26191 8.5574L8.26199 8.55731C8.3696 8.43397 8.49185 8.29382 8.63104 8.18544C8.77165 8.07596 8.9376 7.99235 9.13374 7.99235C9.23977 7.99235 9.40799 8.02833 9.59617 8.07877C9.78833 8.13028 10.0133 8.20035 10.2389 8.27499C10.6904 8.42435 11.1487 8.59356 11.3605 8.67348M11.3252 8.76704L11.3601 8.67334C11.3602 8.67339 11.3603 8.67343 11.3605 8.67348M11.3252 8.76704L11.3605 8.67348M11.3252 8.76704L11.4158 10.318M11.3605 8.67348C11.428 8.69874 11.4865 8.74341 11.5288 8.80186C11.5711 8.86043 11.5951 8.93021 11.5977 9.0024L11.5978 9.00277L11.6217 9.71996L11.6217 9.72048C11.6278 9.93803 11.5546 10.1504 11.4158 10.318M6.02709 8.82836L5.93014 8.72906C5.71638 8.51012 5.2823 7.98643 4.88513 7.36169C4.48637 6.73447 4.13456 6.02028 4.06941 5.41739L4.0694 5.41723C3.97969 4.59991 4.54549 4.01955 4.80637 3.80016C4.83714 3.77572 4.87562 3.76301 4.91492 3.76433L5.38076 3.78063C5.60376 4.34529 5.78557 4.92537 5.92476 5.51633C5.92049 5.52365 5.91412 5.53315 5.9052 5.54482C5.88375 5.57287 5.85318 5.60622 5.81743 5.64198C5.75824 5.70117 5.69145 5.76048 5.64066 5.80559C5.6301 5.81496 5.62024 5.82372 5.61128 5.83174L5.61128 5.83173L5.61065 5.83231C5.60564 5.83687 5.60063 5.84143 5.59563 5.84597C5.49961 5.93331 5.4062 6.01827 5.33709 6.10604C5.26247 6.2008 5.20874 6.30775 5.20874 6.43751C5.20874 6.4967 5.22742 6.56458 5.25274 6.63195C5.27887 6.70147 5.31567 6.77963 5.3593 6.86229C5.44664 7.02775 5.56489 7.21793 5.69027 7.4044C5.93972 7.77542 6.22567 8.14398 6.36428 8.2826C6.50261 8.42092 6.86885 8.70872 7.23945 8.96034C7.42561 9.08674 7.61587 9.20607 7.7822 9.29422C7.8653 9.33826 7.9441 9.37542 8.01452 9.4018C8.08295 9.42743 8.15172 9.4461 8.21202 9.4461C8.34485 9.4461 8.45371 9.39317 8.54947 9.31776C8.64261 9.24443 8.72994 9.14435 8.81865 9.0426C8.82363 9.03689 8.82891 9.03081 8.83447 9.02442C8.88041 8.97158 8.94495 8.89732 9.00871 8.83328C9.04457 8.79726 9.07768 8.76703 9.10509 8.74648C9.11566 8.73855 9.12409 8.73305 9.13043 8.72943C9.72236 8.86866 10.3034 9.05069 10.8689 9.27408L10.8852 9.73992C10.8852 9.73997 10.8852 9.74002 10.8852 9.74007M6.02709 8.82836L10.8852 9.74007M6.02709 8.82836C6.28209 9.06038 6.7454 9.42845 7.28405 9.76963C7.91365 10.1684 8.63051 10.5203 9.22949 10.5854C10.0495 10.6726 10.6298 10.1069 10.8495 9.84831M6.02709 8.82836L10.8495 9.84831M10.8852 9.74007C10.8865 9.77925 10.8738 9.8176 10.8495 9.84831M10.8852 9.74007L10.8495 9.84831"
                  fill="#3CC952"
                  stroke="#3CC952"
                  stroke-width="0.2"
                />
              </svg>
            </span>
            <span className="spanTitle">
              <h2>{truncateWord(formData.phone, 13)}</h2>
            </span>
          </div>
          <div className="dispStrip">
            <span className="svgSpan2">
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.875 2.25002L6.36659 5.8147C7.36005 6.45957 8.63993 6.45957 9.63339 5.8147L15.125 2.25002M0.875 2.25002L0.875002 9.75C0.875002 10.5784 1.54657 11.25 2.375 11.25L13.625 11.25C14.4534 11.25 15.125 10.5784 15.125 9.75V2.25002M0.875 2.25002C0.875 1.42159 1.54657 0.750011 2.375 0.750011L13.625 0.75C14.4534 0.749999 15.125 1.42159 15.125 2.25002"
                  stroke="#5C33CF"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
            <span className="spanTitle">
              <h2>{truncateWord(formData.email, 16)}</h2>
            </span>
          </div>
        </div>
        <div className="cont1Disp">
          <div className="dispStrip">
            <span className="svgSpan3">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.9997 1.99872C11.7947 2.0011 12.5564 2.31795 13.1185 2.88009C13.6807 3.44222 13.9975 4.20396 13.9999 4.99893V10.9987C13.9975 11.7937 13.6807 12.5554 13.1185 13.1176C12.5564 13.6797 11.7947 13.9966 10.9997 13.9989H4.99991C4.20494 13.9966 3.4432 13.6797 2.88106 13.1176C2.31893 12.5554 2.00207 11.7937 1.9997 10.9987V4.99893C2.00207 4.20396 2.31893 3.44222 2.88106 2.88009C3.4432 2.31795 4.20494 2.0011 4.99991 1.99872H10.9997ZM10.9997 0.798828H4.99991C2.6898 0.798828 0.799805 2.68883 0.799805 4.99893V10.9987C0.799805 13.3088 2.6898 15.1988 4.99991 15.1988H10.9997C13.3098 15.1988 15.1998 13.3088 15.1998 10.9987V4.99893C15.1998 2.68883 13.3098 0.798828 10.9997 0.798828Z"
                  fill="#FF4E64"
                />
                <path
                  d="M11.632 5.23574C11.4604 5.23574 11.2926 5.18484 11.1499 5.08947C11.0072 4.99411 10.8959 4.85857 10.8302 4.69999C10.7645 4.5414 10.7474 4.36691 10.7808 4.19856C10.8143 4.03021 10.897 3.87557 11.0184 3.75419C11.1397 3.63282 11.2944 3.55016 11.4627 3.51668C11.6311 3.48319 11.8056 3.50038 11.9642 3.56606C12.1227 3.63175 12.2583 3.74299 12.3536 3.88571C12.449 4.02843 12.4999 4.19622 12.4999 4.36787C12.5001 4.48191 12.4779 4.59487 12.4343 4.70028C12.3908 4.80568 12.3269 4.90145 12.2463 4.98209C12.1656 5.06273 12.0698 5.12665 11.9644 5.17017C11.859 5.2137 11.7461 5.23598 11.632 5.23574ZM7.87138 5.81411C8.32912 5.81411 8.77659 5.94985 9.1572 6.20416C9.5378 6.45847 9.83445 6.81993 10.0096 7.24284C10.1848 7.66574 10.2306 8.13109 10.1413 8.58005C10.052 9.029 9.83159 9.44139 9.50792 9.76507C9.18424 10.0887 8.77185 10.3092 8.3229 10.3985C7.87394 10.4878 7.40859 10.4419 6.98569 10.2668C6.56278 10.0916 6.20132 9.79495 5.94701 9.41435C5.6927 9.03374 5.55696 8.58627 5.55696 8.12853C5.55761 7.51491 5.80166 6.92661 6.23556 6.49271C6.66946 6.05882 7.25776 5.81476 7.87138 5.81411ZM7.87138 4.65705C7.18478 4.65705 6.51361 4.86065 5.94273 5.2421C5.37185 5.62355 4.9269 6.16572 4.66415 6.80005C4.40141 7.43438 4.33266 8.13238 4.46661 8.80578C4.60055 9.47918 4.93118 10.0977 5.41667 10.5832C5.90217 11.0687 6.52073 11.3993 7.19412 11.5333C7.86752 11.6672 8.56552 11.5985 9.19985 11.3357C9.83418 11.073 10.3763 10.6281 10.7578 10.0572C11.1392 9.48629 11.3428 8.81512 11.3428 8.12853C11.3428 7.20783 10.9771 6.32485 10.3261 5.67383C9.67505 5.0228 8.79207 4.65705 7.87138 4.65705Z"
                  fill="#FF4E64"
                />
              </svg>
            </span>
            <span className="spanTitle">
              <h2>{truncateWord(formData.instagramLink, 16)}</h2>
            </span>
          </div>
          <div className="dispStrip">
            <span className="svgSpan4">
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.8852 2.80046L16.8854 2.80129C17.0556 3.43018 17.1496 4.43528 17.1988 5.3185C17.223 5.75275 17.2358 6.1453 17.2426 6.42931C17.246 6.5712 17.2478 6.68573 17.2488 6.76449L17.2498 6.8547L17.25 6.87767L17.25 6.88328L17.25 6.88442L17.25 6.89005L17.2499 6.9131L17.2493 7.00362C17.2486 7.08265 17.2472 7.19755 17.2443 7.33985C17.2386 7.62469 17.2272 8.01821 17.2044 8.45306C17.1579 9.33812 17.0665 10.3417 16.8969 10.9634L16.8965 10.9653C16.7406 11.5455 16.2798 12.0063 15.6995 12.1622L15.6977 12.1627C15.4108 12.2409 14.8598 12.3083 14.1519 12.3607C13.4583 12.4121 12.6553 12.4466 11.8899 12.4696C11.1254 12.4927 10.4025 12.5042 9.87053 12.51C9.60464 12.5128 9.38667 12.5143 9.23532 12.515L9.06064 12.5156L9.01519 12.5157L9.0037 12.5157L9.00086 12.5157H9.00018H9.00003L9 13.0157L8.99997 12.5157H8.99982H8.99914L8.9963 12.5157L8.98481 12.5157L8.93936 12.5156L8.76468 12.515C8.61333 12.5143 8.39536 12.5128 8.12947 12.51C7.59749 12.5042 6.87464 12.4927 6.1101 12.4696C5.34474 12.4466 4.54169 12.4121 3.8481 12.3607C3.14016 12.3083 2.58921 12.2409 2.30229 12.1627L2.30046 12.1622C1.72018 12.0063 1.25944 11.5455 1.10355 10.9653L1.10332 10.9644C0.933444 10.3364 0.842057 9.33206 0.795645 8.44881C0.772831 8.01466 0.761404 7.6222 0.75569 7.33824C0.752836 7.19638 0.751413 7.08188 0.750704 7.00314L0.750086 6.91297L0.75001 6.89001L0.750001 6.88441L0.75 6.88312L0.75 6.88289V6.88286V6.88286V6.88283L0.75 6.88259L0.750001 6.8813L0.75001 6.87568L0.750083 6.85269L0.750683 6.76247C0.751371 6.6837 0.752752 6.56919 0.755521 6.42736C0.761064 6.14347 0.772148 5.7512 0.794279 5.31757C0.839277 4.43589 0.927877 3.43417 1.09256 2.81077C1.2487 2.23093 1.70925 1.77059 2.28923 1.61478L2.28923 1.61478L2.29106 1.61428C2.57839 1.53592 3.1297 1.46791 3.83761 1.41443C4.53128 1.36203 5.33439 1.32616 6.09977 1.30169C6.86435 1.27726 7.58723 1.26432 8.11923 1.25751C8.38512 1.2541 8.6031 1.25222 8.75445 1.2512L8.92914 1.25021L8.9746 1.25004L8.98609 1.25001L8.98893 1.25L8.98895 1.25L8.98963 1.25L8.99247 1.25L9.00396 1.25001L9.04941 1.25009L9.22409 1.25072C9.37544 1.25144 9.5934 1.25288 9.85929 1.25576C10.3913 1.26153 11.1141 1.27307 11.8787 1.29611C12.644 1.31917 13.4471 1.35365 14.1407 1.40501C14.8486 1.45743 15.3996 1.5248 15.6865 1.60305L15.6883 1.60354C16.2686 1.75944 16.7293 2.22018 16.8852 2.80046Z"
                  stroke="#FF0000"
                />
                <path
                  d="M8.5 5.93426L10.0986 7L8.5 8.06574V5.93426Z"
                  fill="#999CA0"
                  stroke="#FF0000"
                />
              </svg>
            </span>
            <span className="spanTitle">
              <h2>{truncateWord(formData.youtubeLink, 16)}</h2>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayDetails;

