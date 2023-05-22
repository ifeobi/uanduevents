import React from "react";
import Image from "next/image";
import AnimatedDiv from "../components/AnimatedDiv";
import g1 from "../public/assets/images/U&U_events/h3.jpg";
import g2 from "../public/assets/images/U&U_events/h2.jpg";
import g3 from "../public/assets/images/U&U_events/h1.jpg";
import g4 from "../public/assets/images/U&U_events/v16.jpg";
import g5 from "../public/assets/images/U&U_events/v3.jpg";
import g6 from "../public/assets/images/U&U_events/v9.jpg";
import g7 from "../public/assets/images/U&U_events/h9.jpg";
import g8 from "../public/assets/images/U&U_events/h5.jpg";
import g9 from "../public/assets/images/U&U_events/h4.jpg";
import g10 from "../public/assets/images/U&U_events/v13.jpg";
import g11 from "../public/assets/images/U&U_events/v7.jpg";
import g12 from "../public/assets/images/U&U_events/v10.jpg";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

function Gallery() {
  return (
    <div className="aboutpage-container gallery">
      <div className="gallery-header">
        <h1>Gallery</h1>
      </div>

      <div className="gallery-body">
        <AnimatedDiv>
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="container"
          >
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaXy6BgzHuz_CeeapgjusuQP9ioUr6QTWn1HgMfqSr9iq9diPofZFZVV51nuZsCdqQR87ShKkB-Ko5jBrivdiydHiyPtoSOMWUMdYbkv9_N6BMWHI5r_jtM2suIzQpXVH5aIAHGprwtTfmB_GEuKGn9y-YOWHRwg7MUoohq_xt56Y4-tVoDaLlvD394rFP1qBuQw9GMRps0eVp1LGwFt_TnOkon-vgPWFDGQpBhifqkgvQCyJvkUw1-ZMPtWkJeeBM936E0kM0RoEjlNzFWEyOflGbQPwuYXIl3ZldpIfDH4JdsjSFx7cV2h2q9Df1Pd-9xUBD_5A8DP4nxu5aiWcZv9XDvbFGP9Q2RyV4SRpfBPiq9CtZTXZ_opT62Anpye9ijufb2A81asH3HPk4rwe5UookpGoA8XW0NgIGmGPdfoIx9hflmsBHWogy82Fjgy-t54wiiuOSlzeNv1vyUJssfvN2dvk5bQeNPBtpAeOhBUF0FEOUNzHfEPiS9S-yzlwcbW8gUjqBGLlOf40q3PuLR4V2MYyksz6lih8QgkNOfyG43yfQoislZdtwAH4RIUb9g2xVL_ZuW8a8n71dr5rZhMHxS5WS7QCM-JCBPwLAO0qFbtz_CJ5ZbJYcUEzILT776YUc1vYRR_xgkqd_vqACUuMZPiCSqRvh7W5JNat4mTxoy0cVjf1_Ct_ULK5QxMmJLj6Ylk7HawMjgmqu5jLdraGwSQcixYB5D5mlqmqRMJdApKbaSnISCUYazZgmsWZW1O6mZ28exIE6ZaSB9urtTYN02kOdGBi3hkKCzMHAnqJUJ1ErIHEvwoXs0XRaawrNqvunthRrySxwPT8lLk6yBbwAdc4i-xk1n1jh9gCdY72hKkGZukSOkMGHUvI4CRQm1zoRxberNXeF6rY01FdSAXoAFKUIu8r3u19ziExowfaVx5WfnH5zR0BvPtM7AkETiAPRE4QSPEDjkf9SeQVL9ETjQ2jEanhLqTk68tWzvcS7isOnA3T6-oC-s_aFz5s-bA_BcDsf8XLioBZqNFdtpL1sR7SmKHCrNrnQ=w930-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g1} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaXwfHPEoUCVZhIXbEGuQvb8orgCdDkv1R8CZgr5YAiq4_NBACalpeKZBetcfgWGeC4HZOrTR6bLFFyzTE2xeaqRmJWMx7LfC2gYL2fGsiSGbOfDJCry3IJ_7vXOHw_-E5JZS4zjG_VQ4X_ySbOFGsZCUGxrmhT9ygTa1H5e3l8zZZ8RflxkB_P1T4b18B1rOifdSk2Ku7BEjmyqhPNGaIPA4e7ztqQvF-aCzD9qqHcdmB5A_jgsj_U_yhHoIDvikm4HLXCYzlKvXKNlDjK5MNu3IkWO7sfzpNNAZZqbC4JapkLRdZiYD_5kw6t4vE8sIO5lThfabkGSq9AeqS0M6UzlTAJXi1wjiIgnfxnOspBz1LD0FPkY9_vf8l1rO9BkjlGPpqw414XLXHqnDfARgMYlL429oaeUW5XsNj2H2rk5bGwZih3qhrqO9Ikcrj8KUbzsGNb84FGU1tcJ2m-lEPIh-4iMj1_685owkt9KsKjVFEABtcZJzTIZ7_l-py6Z67DIojCsfwRgwqgsdBJcWPnEdTUtxQOESyKWKU9XwHGrycKwmwnx5y3wgSG394w_DJF2gBVVe4QelAu25K_d5MeXA8iL5kzv2HpbaK2CGpmd9CXAUZhqIfBB4ZoUxLhKI-YLoL2v27TiCK1jsHyPoNf-csoAY4B0JZiYEO1xaZXs7t9iJ2VmGbaceJp7KeDNK2_S_SuKuf0K5bOvSeMtpKlF5OQQIFRok5O4wFDI-Es6jYifd6D74dPoNVAI2CgfhJyMvCz_Lhsm6eSShM28_swrtFBMj7dpa0iTrVgWg8-DpQzKztLlu8xdmjO6i-PNywfs-q1GbUE5M4-nJQPRr6YkF0XMYyOarvb00qb3F2MDXy1oS53ZJrI0toK-CiUr5FQ3mV7-7zmlmUuReZE0ch9HY5QStiG2Ng8y7IvV9w9LJPrT75QNPrrgUrFqsfnb1N7boPPVU0BRP9RCcm7ztoiwq9tAqrlBSURA-dNpdvcUIEyZswmHwXBrWTAiS8F99U5Aw3_vwgc0azuKXMBgAhrCbRbmAQ5HlWvWRA=w929-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g2} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaXpNd7QSOmAnBgdByAXDxyUnhjK7p7HBBqJXiI7Xn-GzvdUbPZrIx_ORu9zmeC1h1UC_UPgqm4VR3M-sBCTIuY3vNR0mnEdlKNV8amuo-65VrAoRrq22lbD_vnlTHW7NQ8OqCvvkxoFslB59sGBwUoEVh6pLtBS9zc91Cgg3SgyIF4bpYeFvFHrIkJKivYpYKwH6nO0RvKVt_mk8Ph-o8QXZpyLXNQgBDM_DgV_eTle82WpJnYmF9KzWXIw0moE_S4zxI_XM9x0MBvTcNth_6cxOVsZMeEo7WiLmCYj2eEqLxX7gdhoqSqTzlC08xOoYX_oYg2eyp_LpYYdxCbvl9XrHZzIPsfVMf1nE90xIqPGoM-VHN3zt3PM0ZP1J7KJo1MM1W9Jy_VIa5qwoRQe5Z6Ef9dA4MUvUF6I_BX8hX5DMSzWWSkUdhPYQuTL3Isgh9SNBUhnsz5lh_RKQn8tPqTnNSSTxH_f-PgZUvSWYOPj5hpQnErc2YNWFDzOdT6Pgmvm_a34Cj0mkSJBDBxKBcDLkbzEKyf37pAptiuD_m2e0d5ovJbQhprPbpN7UIa5hqlqXfpT6AiRht2uVZZ6xmai72mfmhu28RbPIsw712z8ROeSXT0IKBrHR5meoubZA1fSgpgiUWjBLdsImp7ae2fWqFxeU8wJh6lHjU1SaVz_U5c8ce0EFdsGX5Tg29gooMc4DcxkK4r4Rvdmsv8UCM_zaC92K7b3ybMABAtYFyU6GWY02i0rh9r6pD0aorfGnehYskjLAqoXNXZvCJBn03I5Dg-vzjUO0cSg2h0HL8UhRnV3Ga7IXRhQ2K8naWW_SyADhMaUYxgbsBP2Tepu_4ZxI4sbjQ0E-0K622kgAJyTRi-k6QTD0uumXeObqqv1HXv5mh1vk2xX2Fba0bRFlD5bRnoWAshwXQWODn7-Fk_xHWXTTZikginCBcR5znAFloFwHU8H_6ZlVrGO2W7DgdQhSOAMvJeNqOt1epNzLPt2NtcItUq5jeiSVQwfLLsB61lLYLZF66yAO1pcxmcXowZukPRwb4bwYNRIqw=w928-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g3} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaV08EKeHHiD_fUwcoicqLtmMeQBkV_ouVUWrFO_Gl8hzStP2qk5U8D7txZnu3gPhmHL6nNL6lA9wqNccT0gFLRJ6dNDjfxS48u78mkHjPyJEWeyhVOeIkg56r7igmvRTQSVFPXfdkjL-odnBz6JfFRte6-t4In3btaWLLYuFgttRzpUfz3BgnLPnUjYtx8AeD1pvMePo9QcCCnqyjksQd4eAlvLXa0O52GLXlbNmaAs9RGFPQM7BShRlMTPHBXFjtKQRQDgTlN0PYJMvKSav4RMr_3rmfYaVcOcQvKIsLzzm8WIOkymWWuk8fdRBKXdDzHaHGD2vUMTtfZImTR3zD5f5wayOjNSJxjWxdabhtC_8jIFWZ829JlqWjfq5tODjqIUc_wwqc6f5Ief4ektSWk_yriVvDoc32RIeU0u1DsP8yZxQBrfHk4W-xVnX0snLYqRGrHWWxyxPkRWAxPCIjP5I80zB8bHLI10pqb99Dqfp_bmmGyzT-UOL2dMHtIfCl47B6OVEsdv0qmj0R4Ji5n9phdtZ9P5qYDpVurv6TiIbwF7mDYcaNv0hLGWF4_eVBLIuZnVzI9s_SECiL_yL99qgv-uZBEfyAqbJZ7T9YrdN1eiezX7EkCAN96nV9YFtcYvghoawBuQnmD2Sz4VKdt5bN4UP7hGFDGUg2vezpysHiN1r0nHUdmHezRUUjEcLY1cd4YwVpU-QRCthpS8s-xkw11lcgSS3hv0a2NA1oE88RGjxdvwJ4cODufYXZii_WM9iVVoCoW0DFOMMvEfGP5T58w_-QHzf6uVcvjfs0JGy9YYbBKah9H9XXPfc5pJ-knBg4U-VkbrspmvPT_CrT2PPqczSGcf6RWK-TFC3au04xNSf1zlHTqwXr_4kPb-p2ANQuFZ0zaYTQUb3rfdA9eYAIgYF4jnpNN34tzdWMM0sNcZOyAkCSYey5kOLQNFTkhs-P5AMI9BqH3KEJtQymg5YWOSsJTw7oUyh6q2lpadyARMn5umYH4_kwGC1Kt36kLI8aTm9oVSRXarbry2GZ34o0mTL9Tw_DEiIQ=w464-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g4} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaVeqQewe_DM8u_ARcWuh70AGkQ-k1TifEkwXNXtH1P00mTO_aHu3rvhE53YzqBZKSrxYGpwMVSotjAbVp3BRjlXbp8D4Py8f1w5-KQ4wpQPdBdcza4whqPeV0wiAXIwx4qzmmRhhpn6iOyhr0cLg3EVrD663aU2yWSHjPV1i2tf4WIHhuiWYPXTwmlnCpjUetmIOvVPsrfa7DRZgfHMruuvf-KYQPQjd6Q2f8P6YMbHiUn-ARtdjwzaZCNcJ3adRB0v7aKyyYR6Bq8zWghK_hp68kML3wB7-D-rlCR4UBxtP-Jj2jj8CXYJR5ZVy2Cl_LCE1CZAYVGuQiMZQs_Z_3iD5XHuY2Yw_O5Cuzhi1lCR_3fkeFvixXTlv7976l_d5BtsYpVtOU5SDkEMjmuHHjJzItBXS3swZLLpbuL4UnrpuDHbLhVh1k2_ZHjab_8KouA7prrTiseI0Ve3Yidfg9rlpYAEIthCC1rFqHLkbKHeeH71gAa_QAv37CbPUTwORtCA022JcwgPlgy_eg5JSVh7hlbmHwXn45YJOKQvmcerkW-VxrUjevtWqJC-qF1mjBNcjPZE_vcKRggQqYzs8H_4ZqZ3EyML-gHS1Xt6UhpnysEncBtp_5gSPiNeBX8sGIylkjw3F3ORkj4hziseYWaUpRR2C69EenqcA7RNqRtxNfQsbuZnw--Bw6A4Jqvo_FDJg_fCT6P7TM0srAYRer8Z24MZ4kFwHmlxQjPQ8UdIhHJljoUNz-MPS_a3K9wSyQb7mZ4JO3APtzM6DFXb7ld2ysyB__JuSarhwrtrMdzFHwDXLIygD0hGdzX7i6aYbiyyU37RPGerCSBSoFgdGZCwDosvnvGkbItCDf21PAkG5HbZXS4tTD0200zXsHKlDnxeSvwa-F2VIHX5XUohzm19sNZVknhe84iLt0qfFAKvSmb5Rtw1TK_k9kW0mMGidIJOD33sgp2x5Ae063HMdQGMYV5Ksynfrr3LjyTCMHywloPMcuyB5WYcOlDsDz-1bsigtTey8dhtZ5FZpynYZUkSpFNyR7JAn6Q21Q=w464-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g5} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaWAE-j5epAtsrY6GDrNEHR4olbrxYOHuUD5RoHc7vh5mkWLV26g6nmzAwaKIlNpYtH8zzVu4ehgZkFtuRsAjPQNf9nVLwI0eWtI6rjp65gfWpODz5LubXx8yh6bLfR8_O-K1Px3QP-aCO4RWgZa01TYA-whSnLRIQQbOTTBLNduqRWdeOqLvrPx9aMY_yTY6_VcnZS9fmcgIPA0Vc7o5EhygD97pvYNBd_A804DGDtjM8aXacbjPM_ADZCbeYvgIjZZdKQVGpPCoyFggJ9D3a8y6VEEzlBHobNUCHPq6seHcpcZfKd9rOgy0oK6QbHkBspSZFF0ycKM1L_H0Ik2cCdgM61nTWb3kvNJ_QfOIM_7n-uWnGB4SB41aQA2DrYR8Ki2u7BIyfgj407bGUlMGuufriBd8qDvMgZj44ZP9DuvDwUzCj5Re_dqFr89Fb7rPLZVk9d3QvIc3b-hlXE0eSH9i6odxsfK1DFoXk07H3taVzl7hdy7ed8aXV8teSt6VK0PGxBvhiolmRIf2W8N0djQHZktw7qw7_cy0SaafnijwrcOfoZ5-FJPHyTvHOhKvmsjg1-fX4JZ9l9r3z2xu31AC3a1RXTMMaUGrJB7oyHEVlbRAoVwReszRwsLv_TYMZliuSGJnUta2GPkDkVJyf8V0Kq6oh8XHvnVX1F64nsFsKcuXEA39Z__KYb3xdZ32puXauNXHl11xEwe0Z-Hj3ccRDFN0bGyoTJ1zMDvQFP52TZad3Vrp5zV1T_DZiLOrcaIYPEMD1VcIzgyLK6PoqjQ-YtyoFIOn80Xp_jIB6nSUuewJePuII8VRzoTINaK4sSrQE9ox_M6R4Vg4gprNY4LoHsHPzhHjyXt7g2jGs6wy4va0UC2JbCoY4xJGgcFe54xiKCFv-PntDMbiZIc939wcf_iq8scR9vM6bzDAPZNV15mVDPY2v3V8160lIWXWn_O9vdtHNohVSoc4kuVGsXT_XHU2r8CZbaQaBqk2XngCervh7CxHXdXkEticvhA9R6KyNdJnEPiF0jG3yGJQ9ZgAF8wOT_r4b5j8g=w464-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g6} alt="" />
            </a>
          </LightGallery>
        </AnimatedDiv>
        <br />
        <AnimatedDiv>
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="container"
          >
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaWNL8P8geDqM5Hj1whfaFpwp8f9UCcjllc_pNp819G0PX5Xa5fbj_tf-bbfmXTRBdYFWBkYKG9jcoITbsIu3AH4zfGEGnguY718qchmO8xZDuMOqPhSkGUOuHJy7pFh96ZegiEHbKzrbAWU-btZKwrFGFLVzOTFFipkPoXkd9R4SYEhlqMiIudBgnBME18ZfOh83h1cPQECFJ7QMPtkyxuodubVmLVBpo9lAobzh7xvp_O0UW2HNApmyPsC7UF1YCXZAHEkdfygAxXkLv1oA6ak5yeUcUM3DE6SN_qFuPi9epGJfUudLNYtp8Uk6rKTDwsYYbc5q6QGG_z5JoPlkVktS14E68d4eGgSYbJ7d0jgdzJXw5y29KeCCy1ezyBvYUJA5S2ZAdnJeSIZ7Gi0bUHsk3-Vrz52kX3ZxqUb-hgZRC_83cu8Vl9yXfpT1MdpkPkXKZIaTJ_qT2_tK8WsomqGVHmFdlllOtGKFc7Jdkngd4-bMfh3-FSYKaQ8WoIrnzouqRoeaoaxlfMQ5-vB1nbIaswQeYwuxIqFcF1xSXtu_IB2_FB50aY4zea1FFOhiE658Ww5QSAkz-XPITVORyClt6r_4Z0lej4NtdcNAWoyV4A8lXJyW-q_Vb_Q6b4bXGuNJlVgfIu4YSabYKPbql6ovBV2PqZjdQ4Ed1bbzraWb0-LRWVAwQlliTmI3ztE4ab4vBEwUor7npOsf_ZNrESKDPfNs3Wt57OnA5m783IEhlY-_g17qsCO0qow5MGjTvTQfruWqq-v3-Iy-hQ-LRcvPoVY-j59SqgHXD72YVgQmzGEDqqZ0joLEycOCtjdcAwVhBMfClDurXvuzOotmlBXsRbTi_b0AV-7K0ZFEEwmkN5ET3iL-yemLC6q1nxmda_BD1UfKPFlBLEi8MwNWHRSDIDkpsA1RqlbvbBCP6gH3Es7LYdFRakl2Nqh_rw-rDFM6XvCRAL6hlHXQEsp9T557eAA4Y1kIraCwb6md0m50m2O1DWE1-5xsB46wrF3aygBeqbdcte1e_dEJh1Ws2f3ZQWvMckQx3iqGg=w801-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g7} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaVuv6rWyftGrBX0NKDLQkFTD88b78aB7EWR1HVZBvh4WqNhh-w6u4u_2PkVPHR41mfhYaH0Ez8X-5pbaZaB0SzCJC0Qwec_7wTKYDIZcSsY2Rbq3STLDHTEBqGwBKN1k4D0IhuGRU5rhNvfpgci3gywyuoO3Sx7NO0Vb3aDV53bYaQxyywg4SeKmiZISl-IQsw-q_qUZ8IFamAyjt4MH53A9fh1TFpPnhniH7iDiQELLX24D6FfOqmzHv0fqGnoYG0CXwS4HK65DpnBhKdx3c6wvcUQp66LXKHHr1Triu9u4T3tSSLb5SffU8gn-lfhA3r9-tG8V2BpzXDYJTOYAqRV-Slmfe_xPfgKfXeN40KALN141gVs8BtXF-kTtOism9PBKGQKD1QIp_cVTwbQArdx8ctsA4mSxkGp7wxbUPv6DlPGTP1aaaEY3rOnOiWAaVOLQSP2mVl5nCCzK40bFlFWddRFBUq1U57deCJffViX2WokRsbKLKxSWKIlreI-hSiUwmK4lsdXKNJF_-7t8xLqg5f5TBxYbOKJlY33v08uAFot_4CTlL3C-EZOd6cISUjbI_5Ce5_4IhFJXn21q7VzAOqsPA9AeidmShQ1womH30yCKQ3A3Z58UxujhGWjviUTgJzecm9y7_NNhBfxpkwvpu_z-ItXTUzBX-BANBC6ezHfePxEcSaLluVpU-8_s2SSlBKl7k_4n5K3yho9JplgccsKDY0P5XQXGDkKKTsbLvBpSJGuyWQbxkOz1eTJFCLFzvnowNwkca-3YtADpSyjallH74d5XjQQ37RrqoYyourH2CObXL_vEKwt-BAKLXPuOwpKdosd-zbWCNG4OkruCm_yeLCCpdGj6sbsqumuH_D5OFbO8-CUh0UOwFWZLJigN7_RVudHp-QI5rMI-GHPQ-6jTB2xkBY_p7swzOeeg6oGYG-OEx1p-qQLliWsKkxwo72jN-U5jGBoGAWhfSuk27T-OdQqAy5HNpW875e3Fg-egcyB_oiIyIIh35Wbne3U9fBLVatExGelECa04KFlyzBEdI0jjd5kJA=w825-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g8} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaXYjO_5u1f4NoGGxu8Mi8FH2S_zu_yVQrlPYhIjrO9ar7N5l0oPDSKOdHchv_oOlfKrgLbiEVwueFx5PEu6Cucr5GQxuqGr22m_sppn2KBIi7Tlb4hF_aWKF2_Oy7PfDOU_i4AMDuo39xR7Jm6SgxEZwcsKzh1iWGbxi9CTQ54rL6S6a092TfYrEFyNJAbA-VRQL3XP3uBU7Pycr6QQH-8XN2VL4y_N-FVlcUem9SkuWRaIhH2mrW-M_IouMYQELvrxUwuEMlkYN4l2khntJb_zNFfeqU8Bv_hmGWYV5Why8544sCnXijxVlMXBeSbDBgNt0X4t8AisJhrIUf-0FK65QeJrXzI_5AFg9O7nYN6hzahuAWwfMQZBHvnw2pPCbujl_IXzFjFD4E2lKRgP24QQ-0HpkgdHNYdGiTeJEMzxdKlE2AkD1ED4SHYEDSN6oYo1cPu7YtgSBxdSYvIqIrR-gPn1kdBFj0V94soZREc4gx_vmY3wnHfDKfnbGPpbi1SxGBUk4Dxj5XpuSy89rbT9721f8yaspxxruBWrseHXL0hUtn_zTvkgNxhKIn56TFWx2V1ka2RGi2AEegxIRXpRJHVm2rWonNWYLW_AQ0q3aQNx53TbY82xLi9zf2IajZ9qZmko8kfFJKIolVIlNUEkXmDEDGH2joZjDvfDF3sB6EDoBy4FPNRwx8zLabYPAkQRzR_29FMWrHtN0ETYodCOJbcoSEWHz11GJe5DlCAw-pCasVhq-8JzVzZUgVKvDwVaas2q7h1p3hczYgE1HmJy0d0HecsxyskAXAMJMlLy-TZAWs2ss0SpiMJxNRWpryuXDKFEAExcSk6NIeKxZsnLm8qevrlKe9B2LVte0j2GHzJaNS4Ny2TiGGj57JWhTm4kxFMXQh9dLqlu8yzmPd7t3Y0oQM93NSufeILQzlGOlOKjFxEife7aUJOQzyA7CW4X5uIPlWgZA16jkCJuzTzmkfXSFHegM_5kpgkXC_8TkYLW5V-_ydFrqcHAZPMYrlqDiz-S311I-wSqYgS9-JFVpIZTkCJm3pm5Vw=w821-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g9} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaVpNTTv-6eTYyIFr3TjPDlntcci3KqsklyfTWABBMFca3Yc3Y5s-fmARJrGw6P9fYcrMNz_lUWx9PjyzvJ_Jergsr0eR_IFpZPYLiZIjnJaeinjLE5Z0Q1UwRlZQDleJIVMSJa8jpmGWl4YDLXcpb8RO4bZFCgvnTgh8S_BN-ThhQVO7ni_egz6l7pzquD9dP3gdRZbJLCB_xtvOvVYCcW4PGRppjR8XjDcktc-xpK2uVBpCORHmuvIpbb-262x8RHOW-CX-0W8CK5GAg2QiRAw5HrVdD1wHjd-mLDierbyvFALW-CKREgGgVEwqf_uSav4PwOyfVxJIDkM7o-b6--KBwHrvd1t9gHgxVeX0unsZWNMLryxyLqbjWRMOWQXvEcnDLO9oNHUATgdZGBvezJexlmF-3UVeGP-VA1l-IHZ_XB3hWsmQvstN7Tl85KUM9gH8XB_xPdc72DpdNesO1W9JT3mdry-WZ7RSm7yr5VVyELR_VPXgUep03YMNzMTyL5C6vuES0pMiSBXNl4s5bS2Vc2TuE_lNZZAdTLJARccgDQmcpgX_GUoGX_2zqn-duIqUGsdqUh3OIjhIY5xO7zEPp4OHEH55wX67dAXaNPT4LpGIs_Oscflvpt245rH-ijzQPNSE0MuyQWU4YVMUHR0gI9oYaTxa5p7qsNeQL1a1y442FBoXV6usYtAu5E0Ged0yD7ZOZOgbV3HO-quW0zwPYXB0yKfIi5uVjmS9zn82hyy0lXGTC3J6GpXKEkL9G91WX84EU6aYO-NpTesfG92oQsuU--3S58Z1Rt-QDA0L_OlLNVE8Wa6gU6GyVkl1s9bL-tRBY-jU3T2S2LocK1ni-gle8uzJDZXEBblLvtLDT3EcMJTJkrYs5bSlYTLcBxgdL9XP6Tj7WyDsb5sGhmYTq3vqxDK20umxXTW-k7vaz8M17BLj6RrL17L8_K4UDC2auVqlHVZKhtg6cHp9beHZDBrkrY0GNpXZDnuX6Q-JxB2sappEF2Jeqr3qKZ0aQTopFMVfDjb80k60YlIe6Wx2i34N-_PwQFidg=w464-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g10} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaVV5CdPxvm72y0WypWN9-2HKIYQ0SB-re9-Rbu3YXlw2pAyVrcPlIdMO9sMHVQ2TJsqQdTrUPySnB9iGqZyFB8PTd1jvw7HFalf6dLL98q0JCKORtzvzfNAmgt9ny7aFhbTv2arnCkBYzOKICWfNhHbYm0EG9yUO2P4a91WtZbUbDZQiIV7IPfTYOprTbOEG24e3aBfkf5-OI5qnl_SBZiJJakxE_oImrRHrQGqR5cYDuTfXw6k0st7SVyZwAGS0kpUWkTnwV39USmYHK4LIRC9NGW3qymGY1CbtM4JR7rEEH6MPR5ocp3NXxfBz5KTOoX-J3etekKg558yYKDxAdXdvS7VhPMP55LhIytO6d_KQYH8QyefStUorqIBSUa3-oZly1xQJs96AA-kFuiWvdeB2JI-Z1CyvkpNkXXSlamJaSsSdce7WGE7Qz1_ifdk7tvvbv1KOclSFdnRYiSMPMIpUkjXFgUSzbMT5J1f0nGtvCGZ4XKf6iovKFOY12iT90_11vdn1HTIaet-HV_PV5wmvfpTDp2TxI9cSzfYCEnJN9HMYgaGyhTZ3FPo4e_AtUIR0s3WdFEt5pGhkai7I1nRtPkNtZyj8dfnpBpDMyvTtOQRObp5L4NWAY8dxOoSa_1MJPLYo6UF63NI5wgYxeUj_LnR8Pv9vmrWiTHB5DJHR2Qo-HLX03GKVEccjoXG7a6rjEqohN9pUZb3gJ6hYgue_CA7JuCCBY9npuo-DlDiirg9WV90t7CdDxBxTmwYUv9zlURuTLnMhqlmTBCahfmRs0WuF8QkgtuFW-nZ55q1ozBQw_v1-6XAWbtdtECKGTA2Ne92ITDYY_9C_6mFnPq6KV3Zi-c4ZDQGMvKOyBmnup9L9TajTt2LjzuQ-iva7IB6B58N5HM56FyU42iONCAjinR595Pn23RvuDqBMSc0BPe2sp5Hg5oG0nY6GRNffWYbTg38pjWtNYqbIvRGvRex_gHUM0H4DPZzXHGJjGhrKTw7vqEACnomVKG3GeYg-q_N2nR4UA-qhA2MrWxtekaSD6tY51tvoHIf7w=w464-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g11} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaW6sW6vBRSNFIYepivb-d_erK8sUtJCUN5w4-YOyqWUCEL2VakTJPebgT1pEKoa2g6jhQHntAOKqhafaLygmbYdT22Fjy1n34scZNUfzb2JZq9hKpUBSGjXXsPh9w6OzivqnCp_vKSJ0Qj7n38kmak2Y4aatdWvr6wOYtEe-ruNPr_vk-KqDOy9GxZ3BnI4NKF5c4IAD9GyRNcusrxMXOBSFgtP4OH-CV5ITlHBUkzMtBfpVhbM566QkJcLv_a4moy1RzRRxDxa_RnuN0juM7j3F1vZSf1ijWiNzyQXLw_zjy9yQH0fpBT5TShqY8HUzYBiXKnm3qGgt2-VtGc4MN3smAr0pftzPT2ne01affX-FY44OCpeC2_QcbrhfTZIc84eOqGWEIXsUZ43bkV7LhZ8A2cu44Kl--LjK6rZu9tpdCyo-vZ0I1JDCtTEsnASSMzzYyUq55kszSIWxfIyHPw-N9-X63m0aT6lp9XVtsZi1hSMLSMEh2vBxiE_sobTBEi8fbzwxz5aVYxnGKMgu33DH8z98b5M1nilBs1KW5a_DLqdNFZDATBRn51kokOcC6z8uk40uQhvKTTnDlb83rIJbZd2IsTs2Fr0ug0f1kk8OWVJilNSZ3XiTXMCnh4_bLiCkT0HThiGB-tdPm8q_OaRdil2HJ_NJqYHlWD7qEs8tEQUZHV-v3avJmZ89MfXTLdFETr7DGyCzf7NOes8cYKZjkrz-YMHaTyjGi7lyFSUmYrDZBXAmMd6bq-xTlH2cjPR0NqGPc2ki-CSC4kIshDzOYI3bIfX1DTq77bAEmWCH9sFA_1T53nKngT6TaCy3Jjxt7e9xunoFFp6ZIIY6x2llgo8SrJR0aBBri44rWOPVSeWGWALvg05IujV5ffQRw07whzK8_0QaqSYTQzq73vR3XiNBkKG2Nx_RUFlq7fB8CBZDwsGUKrDs8_mVFgh6DPJFPBg7U9c6tg_eoXXA7Zj0OojvgIVmMHuZDbr0uA_nMalAdXrACBOXtdpgWzGnB_FKARB229eQ-Y_tCeV8oQFaDJG57-XahHMfA=w464-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g12} alt="" />
            </a>
          </LightGallery>
        </AnimatedDiv>
      </div>
      <div className="gallery-middle"></div>
    </div>
  );
}

export default Gallery;
