import React from "react";
import Image from "next/image";
import AnimatedDiv from "../components/AnimatedDiv";
import g1 from "../public/assets/images/U&U_events/h3.jpg";
import g2 from "../public/assets/images/U&U_events/h7.jpg";
import g3 from "../public/assets/images/U&U_events/h6.jpg";
import g4 from "../public/assets/images/U&U_events/v2.jpg";
import g5 from "../public/assets/images/U&U_events/v3.jpg";
import g6 from "../public/assets/images/U&U_events/v4.jpg";
import g7 from "../public/assets/images/U&U_events/v22.jpg";
import g8 from "../public/assets/images/U&U_events/v9.jpg";
import g9 from "../public/assets/images/U&U_events/v20.jpg";
import g10 from "../public/assets/images/U&U_events/v12.jpg";
import g11 from "../public/assets/images/U&U_events/v7.jpg";
import g12 from "../public/assets/images/U&U_events/v10.jpg";
import g13 from "../public/assets/images/U&U_events/h5.jpg";
import g14 from "../public/assets/images/U&U_events/h9.jpg";
import g15 from "../public/assets/images/U&U_events/h4.jpg";
import g16 from "../public/assets/images/U&U_events/v6.jpg";
import g17 from "../public/assets/images/U&U_events/v13.jpg";
import g18 from "../public/assets/images/U&U_events/v11.jpg";

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
              href="https://lh3.googleusercontent.com/pw/AJFCJaWo0ssOgsjb-v6IVKhRu57rZr20bNv-enmEJM6BiJ_Vi-245clKSI2AE207m02y4O8RKpVBsZIwb3STe3Qb32L1Z0DEHccWX6HzEWZ06eI9zYtFGuMRy_MSkuTt2sWKZrp2NY2SATamDmAbIg5VvQfxROF76S6z8Zw9KAF0LQ8WgKFKZgzHMdtQOrV2JZXB1dgalfazwM4NzCFkaIlghnwhrTpiK9jV6jMRDG_ZvUfPoBloYJ4H0rkxKD_t3V_ynRXqREmDD-tGF9qYHoc6ehudC9HAvFjw7Ju3OiIZZzswZ2wKqe9q_BgpU-BJXvZIqJLJ2TO1tiNGk4D3vuWOPopLc7gJQtq8U-HyZiTcAqWPhMnXVmoF9p35NRsOCYkB89UjG4rlKb1TJbr_-L8Ej7iyd-NO53sKrb5DF7NwwqaKB1iE1AOx2uVsBFTOCpD1iyEmG0aDDaDtpxY5-2edYZRRyGMNruB-MCoXiae53iVcmE-P-3RN5b5Hd9Tf2et7ZgQQ_zAY-cIYSHGIf-x2T9w2J5w1rFb8apTeVQSj4gYZEazXBTfqY8_V1CBD66Ehtb67nvT1vJrgTz8wnXq3u8DrGsMeYpIqzCHg_xduA_9rXn2fDA5XUTCUjArpqgQ2Qj2X71o2uAYAp8rODbtRBRts4tLEnTWr-D5tnDnCrI6p_J996RqxLJvaQ2FFKo4scAmVxz8Nk27ICGZ-BhXj2TouOFb84SvUztZTZxMSeGfW7txrhmL9EBv_a2QIgveEp1uFg_KsO1rwc6re_r0ewwnUHQ1Cv955ZOAwwVyarAQwz8AMKKjMnoIDnwDhUI5hYwZCnXcFIsUKxiHBdmaEI1xUPCxM4hmxAW7u1l02Csyoth47uXk3EkoPhnomKprNEYCbchJzHvO7aKQ2UuJhoV-n4vH-_BEC3WZX9V5K4WHxJS0Plh-F-W-9UhVyudzSMP_gxOject9CPRHDFzQooiKuhOoNiYxDeXqnNyQbVW5vpJbAnGPyYBSMS-7I70VMXftoc_SNogv1EfgOoGEdEInyODmjOZMAlMSP9w=w929-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g2} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaVWkO-2Gemytuvzyb4tkE17-daPSM-MraPdPudQ8z6HHmAN67p0glO2sYkl5uiFEFq5TWYc5N9UWj2naYwIYRER9z1bXUMz8pc6ZnmALg0tNVuaO7RWpSrKHonFKENGFryFfeNGnlRTZULIsESfPcq_ddpc5v657Ks5VMzBTdX_aDT-RQqeH6UscxSMeVrrbjsSCzvU7VnoGIpFrUewyfsqEdD3Yh9_dUklN-uyyOkUR3PPojIXSHVNW3DI4uv0OTold8McQQxkvTUu02QjZXp-hEOB-gpy-TrUhoLO8l0faYnNx_btlPqN8CUMjUtSPduaS6TMom1xfBRBGOiBEU-XgHUTWsBDE8GKyweEKUhxcWdYFf7owNVRkujegX2SkT58ON16EOjTvDAikMEjCO_tIbOk-EJt7ZCqkh3i-_fx39MLIQ8gwFZJ30gEva0DmUUjcbmLnJT_KqjeXpB6GtsHrQd3OGCTv3J-HlLppQCVZnKMUhjGhkuG7N44p2YsNsND6jecPWVK35nDOwxsVI-yUrk_Edd1sgBRDcKEJN03ki33DcfhU-LEPPwd5ZYcau-00ZSrFH113Ei9ikED0VQdgFLHi4vTUqGGJsUVE_SEiPT8z9bbYTJ8F3-BjyQ6fjZdziarI5q0fdEo0L-dEDDnuWHdjPh8gw4HACGZEreggTGWFVOWc6puSoILITgHRYr8khYNt2cSF1rlaV6QRhuypHcIau9ltQ94qaVvcEKg2ykp5Oj6SE-mz97DoPz2g5zvigZzJiV-qwcWULiwi9rh8JW0Jyl4n03Ebq_bwjHS3qTACKTAqOGV66jSrKKunz1w_pcqBiCQVT26jIWnkUbilwQUJPzAgKztJU7MUqnsMR3CfGQyTQ-eFw0LQrhg9ACpfBwOQZ51G0bxos0vB50m326klgyWjuXakon95-iPCp5F283xHNCS6-prZNjpylj4sxeEVlY8vUseK033h_7WnrpaoBPCpPDU_7vuLthxhDZzCmBqs5A1nPCdVGXNjykIH59aRQa6mL4po6z3wv_NibnZvCGGmTOiMw=w929-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g3} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaWyFUES5608JaHspJsl1znFby8ZjEjlpEbQGBLt4t-dVG_Fi2b81pEk7ZbnWw4rKKEQgcIzLk9HV1DDDyhF5VD24ttc7oINhU8TYZ12zjehKpStalJB_swHzZd7VKdlVfmM972q__-WMjrofyIkTd6MskrIHV1ynk8xkMF17AAfyHnAUPFYUOiSW4uYTvaBZGbSVZtrDvvewBpr0xT5AX2or3nkmPKu154woSDc1qxWbBHTrBiyxPGHULXPz3sVRDMJw9t51jwTD-rGqZ_mTDoCX8UebY-ZXPjf_wZ6rY9QA1j80DGX51yr-1W40cfi18x4DtI9-PkpaaD2wioF7L1k4Zb33A6N_6OdU4hm89T6IWWg6wTPNSw-rxQ-JTPQlwV6WP4gZTwhjtsmFAXGLXiHiOyeGeoZsG-6SzcvXUGL8NcmhwF81qm87Tc-1VSR_i7F0cDe5oajPHLOwKlZFHmtjwT16jCWAQhTpu8yqAPhW0bOBArePQUshUvVBaj0YEeTk8DxD_3b4VWyF2FDbhce3bUBGQaPKgB3tAXZXDDeZIhDoagKIFAM9z-QiByKXSc6dAs30jAh3SZTOGCSS5MKAWpXPj2wf9tchgAZwJik0NJ3RNxe8fHQaMHBPbpfIZIRr2q-vFnvH672AeHHNBvnGDvlADQw_ofuZHVJxpISs5Bu3ZZ8w8F69ig87YlDx07Gpvn0uN_3ksV-9lZI0VepC26q5kedWUkhT3FH-gXdI3NQViUwKj4W4YzDfXgTylzlxl26ndNcKi1bYHyleOZd-6p6YdEIXqkulZe6HIzgs5ZZldU04cn8znKnUzQW7PUTFJN7P7NZi9QzKpFgXuz-yJpFQi-O6TqPXtxM60noay3IpGc8m-ibN1_X7-Ttyx8hGfSx3h80a251LZSQ6GIT3LmHGqwGaxy28-5ETlbzQzP9kRm-BWhBxqY-QuFn-rDkpBTX5eMKeyAqY99OXcfTn3S0vpf-iYrlszJS3RaaJalJl9Eu5k4wI7WXfr20H6b5FyLkAAdLnULuRFETsSt78c-LlUuXDs3KMw=w413-h619-s-no?authuser=0"
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
              href="https://lh3.googleusercontent.com/pw/AJFCJaX2QJaOLPIGJii_rnpQMRtimKPvujjeckGQdnGho8hJu0-MrLMMz5dzJpY-PoAeV5G1us2610ugPkqVLxesYjYWCC4LAJWcRFtjFAZrXB8wofnu8Dhk0CK9yc_NRcws8V2eFkekuTB_MtQpsy09Dr9EmZWlB6ADgci9FiOYxPu6eYkXUVF0Nbi_FAUeolk4xUarXUVY_x7Hq43isY0dJZbovdf0u2gn-hQdFx_K5cHE9Cc2ExbGtK9m0EIXiMHiH97a0ZgOdF1gD05doLOzLSWC5FwiblEa9ZoLjGYqKveV-evsabbF4s3rfHWMVXLSDpjZ0UsTggCNKwHVoguM8NzDgOG55Ns_ARsojyuw9FzpMHEkHxy4UWYbw7_gMSMAJA_IXpuEtQVjwlfeziLPUBmm4IFGe4tJWnYmOLe1PYuVM9vQ8DwIvUiZrnqWVBc4e7x9piYxNjhzCmvATgR4Dt5rzJyBHhuf3yHBIqBlAgBBMg2I4cgtzWQn4UPQiJfkNdc2JvkAHpwlGOT1UmGVsr1ZaOBLQq-HIyGyymcEZhHIeD7l4iRoJ4gxcIvuFVpeZwofyPSFqeb29EwG9Ukju1e0E12er308x3ynQu9OjvEWoiB8TQobdf0Q2eFdRgEtg52ECvFsHHUuo9NMjfF_pR8JOAxX0bA6U-f3H8IATU2e7rNG8bm3tbSTOCrD6HAGrZ4EEIYtA-dGnbEFWB1IRAh_jt2pjE4sM3MRMBOnP_oSEYYXBU2M6PNE_1ST2rbC0Ho50FzgiEaSsyqSk7-7tasi77CFiNUHX3cyQTobdG0Physpbvl5nej7nGf70MtuzgAoNI1-NK4UfRT8iSv95fbnTPQPwiN5negj4FuD08fyfAJFqFZXiF2g4_toqXLgLkuSnSPZSWvcMlITQvLGtSBDytjIdyKD1az2_vme3mSnFuhgQKN3UfDkn1gcaGcx1zx1iD9nRjX9kRIZTdJVxzSygU57HFvAHL-51AWbyniBZ0pErvIjRSpZZXNraqva9AQLtVyKGqLj8hFcbNaqOe5toWBdS5CbMEwxQQ=w207-h311-no?authuser=0"
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
              href="https://lh3.googleusercontent.com/pw/AJFCJaWrPH3r686X77uMI6nEqbGpFR4IsWPipv1dXu9O2RDOumOPd1cTLDjkklYiWsjNmjKvRqlRk4bgBaB1YNPRT0qhyC_mczcnkwe_ejOnYiJAyHYAWC1Rat5__6NrmzXrbcUZI7VHg-pfv7y42rVTOvQf9k_R5gPhx79X0buhge1c1nvg8ofmbRf23DuIuHqyjeSSmF4vAzPc168lmcw8KfB0ow2xu3UcCfvE8Xr4tu2eaQALxwNt6JNtVNkspLdc4_tZV6I9ar3Ao4uPh2uWMb6tbnlXIQyKRUiut7YwSdf5b0GwAt1JMSLNdoruzjtcUo0VhtmBdkyWSOXR7gQEqF9ikjYMc6EoQ9Qz-HVi-J2zCmWFqloANkgrycKqUcpIR0acrfwnAplF29CsaAebcPsSj5Qt-CltAI3ZQxS43ja2LtPrhvJHxKomrBmgloDLa48RgpuC5Ru3BqVJwterdzx48QGQhymbbk5JN061LpP2C0S5cLayvJ9cHCTI_RbjMk_7O2YBY44bgb1j80Nj3pIQoJXUHtNT7GfvFTWfW5jkI3khPNnb9Gh38Fa27tY-OmiRPY3nJbP7tUof88MuJlSyR2Doe34PoMgRQF_trqZoGC-2JdZbR1hoEEZo5xLsSlzTOFzO5mFkaXpJBqnivb6A09KHFFwn3Wz2JoeWHh5ck7PGJJBPfehratRQoLx4v61DIgr2rWHs9tOUrYKJpQ2E0TzFiYWRIaSz2q6YxdjYmxPx_lsjABIebA_ZsjnpFI1Wx5Bza0cMDg2TXw55lodr2PDpO8GVwdDO5vgwxFIyifMZ4L3fUi8-FIFp9odLg91hnFqCjPi1rN5hTD6lr6KKtxTA4MmMI6VW2piaK5czWXrihWRzt0_iV2a-aKpgZ1_VbS9qG3kiZCh23PKkI_Y6y3fwbCVxv9f4m-6qs5xWa_eGWwrrOmqtkuatTinAuVDX7ahJe9SRV2orzdmPGbBna3x70vsx3v3yhRTZCjFOGDRlGX54ui51BoabIGUzPBDaUPD2EWBLo2_Cjthoq8K9c77lffHGn-YW7g=w825-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g13} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaXfXET4NMrD_bcbQb2qPO3nK4O_yx-tGYco0mcDmUBB4JoqIfkz8HVfHw3zDdUoYL37bEoCEt5beMPxzWTOOl4Bi1pGzqA_wJc47bQKICH8q2h6CWqS3IsqcTcNZc8nUZOCgZrItBjeNzCNFoKnlydaHvY7-jSa3LJtJoUYGm1sJGC7nGK7JNE0F5G876a3PQX18qyDinWP4uHil4wG_w6Sk_tXsyot2TVPRgPr_is2p3u0wMOMYGBPlGWPar70grucgkfk2sm5Kclr4TSBtwfI18iwfOH6TZykZakoeqfj04ZZ5kcZ7Y041yQdRikzlOD5oDcXx44zWfgPmGe0vb_G6x-s6aSZfe4CKqnmtNo4UI64djB_jrJvkuhx9s1H-ATQQByXe2lhYO2JIlt60ZjVSomKs_pWqh1csew4G6COdjGBnCOHIEFyDC3dVgXDNQkP8N6GFJle6H5auiLx-EHPJ5v1sgLSpWz7_wv-jH8p8FyZl6fEhl6FckrgowW2YaSrd3wub7son0ViyjGW-SqDNrMvMT7W6Qvnh2SJ1KGw1rE8p0i3C-RKk9lgYQYn0ivJd8zLxb6ibc_3LTE31zFki6ZyaHJyt-VL6LlxnrHpZ2Gua3HVhEzO-XnLAsDu-7lUykFvPlI2dUCxQlrfr_qsrHkd_skoxE0M_UYcbihpPB2LIfnnWqpn0x7AcsnvcfCuRXC6TZQVi-z86IY0xBoGv1x7CqwM4dZz9oTcGt5hWCBHCqJWzoax3nsfuzBHBjOYgaw_Mb6HrJkbrA17MoJajwXn3Xz49sJhvksVkoNdy4_RONngIfIQaomNeb8WG6_mILssn0rBtBfEV8eV2ZEnxS4GFvXbonRxlLqvPBsO9tJL0scsXB2HnbFo8pPm6UT7FydSBsNUBVyEa5tVLL2eIh_-v8oMi8MSGMiaxTFW9G9NhMk5T5LOBwczFlA4ZSgATwmrwRpiwsvvgjkELzRGVxY2KShspljlLBomL8QdI9pwEBkxRsKS7SukZAq4-gUiExmUnWocNpeVButwPFWuThS9XUbomnEXaA=w801-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g14} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaVnzoEubWb2sR27Iev90rQwvjF0paH8PCrTneJ2l4e_lOjsR2OqfeXSroYwY4vCP9mCUJZD7VIsu3fm9PEmAQ65P4kXx8TjBo2TRAkh5o-LcB0OlOAda7j8arxjLW5N69UCQSkqyQCLUK5NauaheY6D5bePFIVt7gzMP7IotickklBnTN32VAaIYam41B-Ba1W1nzLd5hUtxtYaH9rHeJFxyEfpN2JwxqdRnEcUdc-U7jFiTEo9OW2YaCghOyQ_B-64eqJnCfGYUZezjZ2VYTbNlrnm40SDOO8SjOfaszU0eyD7AnIyqpUQ6rLZdItB9hwBXK8lR1XMigGMpRJiCx-mxVHECPzXhhVay7bqB5H4QR5qKxT9l4q9tdiU0AjHNPlje_wXfQV9wwS61kKFw_8hGxZyd8U4NsHQyafxWpcDyDX_68widWpM3uloDBM5E-FDEih92n7rqVd5UJWbQP-D44ol-rdh8nfQr5iQqBvoL0Hw9KkYj403xI-SeIOSgicaOzgkO5MSGmVFrO1FvTvg_jz-3mWRWHPELxdLjBXDuziY47W4rn8qQ__59mdGke51BaNnpBWJI4pCKS4l6-55eO-BfUcK6gchrtFlr9WlXqlq5qeCmsrCDI1Cjj_PHp1xCQ1b3lIx0deKfpMRtN-KbwZG2zzwwII-W6NY03VZeu_6zK0aI38fU3CtKOB5g3c2kJ9dARlzhIMmmzX5u_bLoIYDVFdzIL99JL2ahfjS59wKWazlpZZ88fBj5K7A5DkXTTmhqthZi8uytnDax03_PT6TH0l7ohD1kHHm_crJtlFsanFVbmFABpwgBN2XHFiS8PDE1g_5R8WOFKYxRplTZn7l0nF-_KIP0xn21Ngz5NstFTKGKbF80V6OCtk4cSbO9BA25tV-KQVOva2U-IHtTg8iiJMQ7vs-6_11r1_qxgyRjeYwpg6pRqcVqrd1sYmr7UZdGsxZpv1EXjqlbPj8ZSn4cepEqcaCs_AhFLmY9l2YFNkKRCXy7mxCcaPtipH-N_tc0xVuKqUCi6LhlWmO8nzCvcKS4Z0Feg=w821-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g15} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaVhS5wvjIS6xtNcMG1v6ByUswqmuomsF-XmIszW1ehxEkoVS73zQ8kccJNg5IyXs8sMc6khHTjvXdSR_r2J3ZvtwfZNYuc5D7KyA8CvFxy7-omgMKvXdaqxebLU44wdMoPOPbkk2yf3M86f4wq315oDPIBbWXLIO5JADcUaD4mG05SAe37FEx2XJQ47R5W392cf29COor7FnUjBSMO8H6yT9PiMjgKyDJmzNgJWDrtfZ7hBgJc-B1z3s69tBn-CDt87WRShcV33CnLAAfHzL0WpwTjdOa9nLW1smYlWgDc7Lbiy9CsuT8Z89cG0KiI8kDYVevVBdKyn-M_N4vDJhjrzGDhV2aJanQ9tN31Uij9BlvLgMq995S_20pHtLZzGFBq4RRpRXlCeTmsTNJSyO6S7emgwv7DimQc5crwjL-tQ_UmvDUpWaonpLilZOR7WBX2DObv7gZrn_6x-u0tkjSVVvP_c7EpuAvzwfiSwAV2fSM8I8Y0yt7SR3Joa4q7TlBknqS6Ma-zeFeJdHg-DWh5Qco4xWCZ7G1nNjBABqh9jUGP0Ba3OJnGPKBrRaf5kaSEu26CX-4I10eFL5kdKYAuXP05viLwqbyAKJWNKxhvn6T6o4MJ395oqWrJvqRVqYj3Zvc6opOjkzqNxuryoYRwxCTFpkYLZwyawzwgcYK9oSicKNjnKHjHRIxdiFC-PVep_nRzWDOa84XJQ-d87R4Es1FLi6Tb1IMOQV5LwG9kc8gYzZ_rC5rAbtAtzZbIYvCvnb9yDDO4_yqERtC6Rxrc7NA_a2aXhtLd7RTJUtnkFyaSYwVjXsdswQM9y_GxK4cbCx36fDBNO9j73KYLev1kQyIUbyhLX7QKceB9rsy-2iilcjqIuKvVqJiJBxfCPAiCHmHwmbt2-8HZROXoltXk9_Vav8ISHmPnR9Pfwp0ol5i8qrLm_yIoWX2iXlKhQJeISsYhe1kgbWf9ETIDVk1Ox-KKWgmCNkkwts5arTKii8Il57Wm-VJOUyf94Y4oXwo7vXDmZrcLOaGpwxQKD4WqjuAhf2fUEv0BtWQ=w465-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g16} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaU8U3Animwwd1OMa2xjtrHh0uQ_rDk8oDTKdIEx0cJfk-eU7DNKqT3KSgf2zcvqy6YUwsEgDD6ui3DkksVoq_WdKLWTobz6jDPrZfXzFVP9aYt3AQjy6gcxQzqSy0Md-atmqQ3mJ_JSAQ6TTR6DVMNfQvAgxzph3ENyUV8oVjdFLCQAZa48Q0apO9OX1RI_SoXJBhYMs6FtuT4JDVvCKTzLBY_GeojIAPGPPMydhIYFdSEgsigP0AmH5IHZjHA9Ifdpo2_5bYcQdoeD0lyDhhXLnTEqqskXTQzXSN1YDSiO0npmXCeJBQkdNkf0NQyUrO_0pmAVY2SASmDnQAjhCDPpxUedIgCBIIscJN52HRkADzctEdtZev_TPL6yxy8SWLkvU-B2q4zyww-DLWdpDQHjKYfiLTqyTMH3OoVNtLxXDMbXczyseKKlSSVRxeP5rdNZK9mVwVCZ8prM4Rnj7gvJ45ISVYa8OJevXcixKt7PedjbnXZV_ZLNBK_FHoTfVNGnMJATtud6usxKdtZl3zEt14EEtjBqBFZ-kn1u4nUR-Yvxc3jEM5e0ptLE9NK0i93genfylume8EIbh3sE7xRsFNw6MSG-ZiXdfnOJI2f4sSSpG39NqfdgBj9okZt7TKQMz6ln1YyzPaVqbv5YrHE1kNyiiRHFhBj5lZVflwRjOS_vf-xSSyJ_Tcff613CuDEExc5s_VxEB96boujslFjjk3q6cTLWdPcf953WtpeCKsop-WAoQr-ageTJisZzkg4-7NJbbHTX1qPitSN0oHyTuCgIv8tfqUD4iSt3eDIxkuF7XCP20-bshEOxAoJPedKaXCNBiBGaf3DjClHMuJb3wH3XG_ujXnedN5acEvmeuHnk7aq03TepIwnCccPKv4WzAQJZTeTruZeguBYJV1He0Oy9DQsuAHSk_ElGJqxh8VRE9rUAXQeZR6x1vujcMOj6FXQZcQY6CXF9ZCnWIzwgg5n_6zcRlO70HrxseLUBtiCErrEJ24NgG3Pnw5L-S11Pcf40WnnayzW_geO3qauJU_VlJBohMIBkJQ=w464-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g17} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaUzPtswVAcBgJIZlRABCMCA-mC0qflT742APu2hIH6SLd1XZgo5IxCpRR2rL9n9mwQZsmV5J7jxUzyLWZXCm0bavFF3Tf_GrvMjzsG5yeBrW7miJCiJEgLxU5oolLfwvH-Zj3E-_OZa3U0C1TejWqY6lLbQI8qZ7YaBgwWeb1szXy6Hshb8CAGeg71YJ7Z8A3sZcGmJvAEOc1PUxihLmrxfJ6RVL4jDXp6udFzSWa39usT4CG8Lfpk1xDNoMJPxxvAxLn5ea92rxPrLo80v77aNa5LylL6GYjgziMjZ7IcDPrJEv_OFxdS_Ist5efmu7acco7XHDHxtPP0AuWFmfhfwsg3G_18b1CSQ_ZZai71arknZe1ktyRscVP7Cvs9DWS10OOsFWoHNe68Rqiqp6ne4R8VTnERKiSqs1HC8b6KF3pcbvfSgI-i6L6AgNKLvPkwUBb3g3OaRN6wRSBl8J13-ZXCSm9vp5QJPFG8dMvw0gSrjV01L6KJ9K4Oay559k7OLYhFOvkbFcdy2xSNMxYGrmxSiX16K2A0R7sj1XxUqPDvb-tGeUQuYvUIBS7qH8TGzdq-gF4x9t2FZI5ZALCBKDdvvrV-JSd6-UhxSWS3nfeC4oLbfmTy2M6PULAPWoo0xRKfyMf1VVNXA0TUxwc4l2rQjIDhOb871f97lOwHx4ipg9d-guJDHDhbz8fUUx0KC_pqFZQZyrnedUvwqFsK5NcJzmvzVq1XRbeY4FCATc2hFBSY5C6HqdBMxMHuxB3OAmpWxDGkPg31HwwoaAB-m1z7Z6JQTuf9rMUOo0Yc-2hRsuLQtU6ZkluhyzVl6al-NcVJfcvZd9wHgy_ejeky3V4S_HPsBhr76jwsWauhkfwNiSu5T1gHXIA17_DF2J1MK9TGOnk3c0K0KA7tJbYxMnYC0mMG0_L3GTyP0ySdqKUzq8eR9SyQ27R-Ed4GEf_THa3qJD2v0MPRgViog2lheIzBvNy8OwL-2w6Fd8sYHctIhFMjouqL7bW5VwiL5E_H7DCKzTfrrNKQ9NZbUYGkelkSp5wQcSdo_Gw=w464-h619-s-no?authuser=0"
              className="tile"
            >
              <Image src={g18} alt="" />
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
              href="https://lh3.googleusercontent.com/pw/AJFCJaXjE4AfUe85j34e4dV_gW8PgPbaKGh5JavRv0NStmMtVFcv98a5apARFGJL31tUT8rv-SbViawfex08B0a9SA24JhObhh_jklwGs9cAY1B8lrR86WCMLxRQ4_zIu7E_MiNFj67_OD_cDT3H_zK0olsLs-4qkqoH2Tx-2gNZIZ2VOpWzwOo5jOc1m1jVKyKeWL0LAqOCVcLRP-Xwl19lwaOeRXQjkabBNV0Ni8fDgTN76ffKIxtnE7BQqWUoZf24EEB2DMlCFOww3-K4w1wejQQyjhkbeiUgKA82yRvTLEYJF4edhdRV4EHr0PYiX1DcnPV0tp-qWiLQdoU9a9fZsZE9mCVNN1RDRx6JHVNMnybq76m5MUBng159kycAWivEG96Wi8thRNF77_THBuEVl854phuFOGFEJr11cRdf97wCi7a-iur2cQdfvuzLVCGOmCFDZfWJmI8H_rKsmLDvkQPsgsaU0dnVNkbf-3gpjrJYsZAHj0Ox0r08Uq8K2by9wx_5YGpaPqvojv4sbd_m-RUEvU9XS7UQf9yOgSrx0sqWh-tI1YrMRn9Ap4Q6scg2uz39ZZ9-qzgbQlMgfuUiviMw_0rwX9wVmwThZTzB9WeWQU6Dc2RDX7fWFivqQOJI2A50femdptr8iNG1IXrGXkKLsy02SSY7vIiwFTh2ybIwPZSHm3F1wqgg0vZiOQb-K66z2gahhFLFIkaYyy_G5waMhEQeiSiPqq5nAuc_OB51uCOukqnjKzC409op4Gt2NUYlZVcl-_WjliY0wKU4hpYF6t1Wo2RNdqtSoQ1j_s-jhEVBWAgdsPv8rVP4yRxWZRXrUFlY9Wdhljs2b2FmORlVUA7MoQqvhc31jdA62GJNNHA0DjAnkCiIelBTFAD-dnqs559IRWBJdZq9f39MMqHuuPeDHXX4nXTJy1xzXmyuGIt9170jrdZd2DqkKERL789gXqm4wCbv2Aqgm7rmzfczrllS5sJehIxD1e5KQkIu_a4DVVJusyRniLRvHQnzicDrO92o-2vlyVrcw7TmdnCMw0glpvKi9V_dqQ=w464-h619-s-no?authuser=0"
              className="tile ct"
            >
              <Image src={g7} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaUwO5jygo4vrPqvbuiRjjEJq4RI8qvAUKgoeCr9APlRQUwUuUEGClJC7pMzIcvpS1QPLwfQqx_mSQiqUsa3bKmQHnfT_FBX7qxHVE4qfP2zQaimtbDSwMKodXvyNY7cnjqJNSqOR59apOVbovHhibRWWo0n3a9tDiJIBy-r9Yj3FKpvt1gCriy2va9kx1zrZ4hO3CS4QepPGwVifUmg3rVteCrGUfRfBlHRpL62IAi7L3JkIUqgjmiqQNZh_JfyOHbQfPwIvvTO06qccyyLHBY1k1QwphN-bGmPTNySwePYhdMTtYmZDTq1lh7MnddY-9UKsNGYQI9Q6DKC6loOgQ_GXKuiqk6_rRWCQLP4vKUZo6Ma6I1lcEdwc4JANtSoQVFUNFKmi4asGsJCwt__KEDnKUXT3qh9gOAZepQmG8m34oqdaciyukHsiQnVWChLfZPnuBOBz-UVNT2JGPkNvWI8ovn5hV7cGD5KcTtK76K8PT1Yd4vRnJar_OttDRjJ95dJkzXR2ef_g5Bvwg2Mw6h9lHiL1kGT0w65v5m8v8d1ZHd2qllkfKJlOKTgRKyN7B6hJNgOt1BtVNGrSewhH8RW4267g7dEz-7QDFz4C0nKlyrVefbagIOMrg2vS5nB8zBQ983QctRVJqbPP9sDCVrfp6Log0aSUKa7PqlkZf5af77-5fYwz-LNj61Z25fzHNTtPfhQGa1N8f8DHsvHgk54X7C1LQev5wKKVs2VOqIbz7GnogwL-FVoc6SVsxOE1wDtfb5RyeN_pBrADtb3DDcqTJtaou2K9T1i5O9BB3QcHdAKGuQnl1IVu5MDClSubT_3DbZOfo87wgmynSmsOrrKtsV39Eaos17pJvTOVS_f7d9sJAGgARo_5yPBD6Di4rCk62bDKkPwbcb0nEZ5u7ul-rsulJvB44ewr83IISYMB_e1ftEQMjI268ztDgO6pJzazlJricOg-hSN8hVRyBZFNOOk80vC4S0eto5s2GrlS4VXDl7p11zoGr8fenoo6M4vhWb_KWn0G3gw7yeTlsf2CG_XunSTUE2PVg=w464-h619-s-no?authuser=0"
              className="tile ct"
            >
              <Image src={g8} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaX-q10sbHHI_CwbrCtW6-2L-OTHl9ukJuimZrU0uUsddljrPa94pod9dEnn1HtLqRjSf546Kwg5ZsCiyfIpDyOLGW61Jk93hcASWotWx-PjG125AYQ2ZNOo8kTRyt3FAjxuYqtK2s6bkKQbOVeLRZjvGRBNUS8uNTicxSbtn4fIDQb4_knLOdIIm_3pq3W-Yvu1QJK7fAhmXxMPv7__6DOaSSBTZrbPutohb38w6lp1qD4fbwWvTlJ55xKq5VAsFK1pJOuzYXWMv0ngyQU6uCF5OYf7IkmghYgFiwDq7JJv5kRa7RMXf1X9kOBr-QpoEs-YZxyGolWcPJTE4aPVwQBnMokQkRSaUmqqdVaCAolAISyxJIEG_6DaCIu1Hy4EdRZjmPYv1KrRm-cJ5bZa5rxJyYuX3ZzQyu6SBHeqsA4n7iVNdCx52lQrVif4E_2951ZidK1hV7QwR4Mp2JElsNYKYKLwfF-UJfwc-KKX4UbKkIFIhhPKiLcDs_0_yuffpe3yaZa1Pl3aIvOo8e6C9XL05_nBsFOD32NbOpaBcNKK-YuOblkFxxA__r5_SyGLzb9xGE2UN6YCEJXySkL12x0LKx-jp4gTjs-Jt6I4jzjhYXGL6bI2yUSD853hcfF9CRK8yeRvBJ1pI1RhVQ-KToda57gSPllbLhfwMg7TO7boGK8SHda1Bbr0Xw020lLUSdU5gTqhdIiVI9HAxryxuJ82MVJ8_EMyCTC-I1Erxm94fihL82fXJZovyd9VNKqY6qsbEnES10yrBWOr8-_XmVIMyas2_SMGTsdp5YchzLehS_VuQTQ5vZUXDej1GzwynnvQIE0RYTkpDKbevQxfl9fayq5l1_1-LKKC9TQgpSySYA9t4GqXkcQusuDWAc_G8XFka9tMFFpBvtdhNUEckmv79L4VHKrA1XJUqTdmTYoe9Ucrxznpi7jn1p8U6Ihe0hfjRhZ_lHM8T0CHoiXBGfNOCNeyZui1b3MVwcsVKetVB8y6dLESa2cWqtk-L7G35hqe7zC7u4BDYyTjL16lz8W55pY6M5n7PyrucA=w464-h619-s-no?authuser=0"
              className="tile ct"
            >
              <Image src={g9} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaWMvj6WBN5K3OWPq6qFlnELiGD14rL8ZxXKj_xny1X6iIGDhR871a22Zzr00wH1v57uL9uT8xnfp4tBI1xwOsWITTYhOqMXx6YSMnujW4jKKtrtryeJYqHs7JEfdPs0pP3CAfkAXlYowle6t9Iej48aRMcF56XDZK7wnETFgbiDaxMe3FluVJLGiaQCGNK7WNRvGLYNeqeMZXGO1RTOFzetvAfyNsQ58svA4oHPxN9s-s7C6UXhOZhQrxfFZEZT5jWCFGvOT-uzk9wCN3o7OgOUxXdPvp1w0VAMV2XNcF96ESbNuDUT1gX_YV-GKVpEmAF-k78WQ3nh5rhf3IkiHPjb1Q83Y2_txdIVGHFi2JDYW67_P0YmFHug5dW0mUzifwcB4R7VsZ3hAgT4jF4YL6KKzZ418JGXrKer5bwgxeGaNflh8Nj6zB3WkDH3loynDptzBCewnzm_JVmlLsJY_AhjCHjbAZkg-ItX_ZlmJQvYD68oXtRgBXYX-TTbJDePzBn2qr43XwgX4RHKMaHaw3m_oSLY3iIAkTS-smAe8hIoBt2GBxC1dF3igBi9gW5bljQ5ZL9h6iMOoa4669DBlDcgLXr0BR4Lma_Af28oSuOegIly1XOtolNZwPy7zEBeECHho91cRAmlZIGkfCDd0smMr2bKLZI2iXEm4_hW7CWn7D-mkZNCbemUfG2NS9D8ZqhD_672C6nPd8tIOJ1weph1Kx994SeFD4z3w1zLsDEDqb2aeREOVN6lIMeCzaquKgsaoXh1TYQLCOTL0MR8ICNGOkjtY9ghvbvzsGaIPZ3QnUE-V4CAyaOR5O6bREfRTG6JNnSGrzj5yw1c_7zxrgpl24Zf3V81TesujpgPmzSsc7vcEGNAeCLksDwZmTQNYHG-_romb5UzYAmu07WRC0_vVBZuuscEcm6QBApbpwH9AoatagwUWgfKdYEGKRE1c6Iga0YkaMLiYiz0M9AHD56DrTCD1rpV9spgCzAsvFTjVL9pZlOEQrY_4CBZltBKjdCF4bdp_hx9ITBcbTluvPJ51KQVBfcCEo-MZg=w464-h619-s-no?authuser=0"
              className="tile ct"
            >
              <Image src={g10} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaVV5CdPxvm72y0WypWN9-2HKIYQ0SB-re9-Rbu3YXlw2pAyVrcPlIdMO9sMHVQ2TJsqQdTrUPySnB9iGqZyFB8PTd1jvw7HFalf6dLL98q0JCKORtzvzfNAmgt9ny7aFhbTv2arnCkBYzOKICWfNhHbYm0EG9yUO2P4a91WtZbUbDZQiIV7IPfTYOprTbOEG24e3aBfkf5-OI5qnl_SBZiJJakxE_oImrRHrQGqR5cYDuTfXw6k0st7SVyZwAGS0kpUWkTnwV39USmYHK4LIRC9NGW3qymGY1CbtM4JR7rEEH6MPR5ocp3NXxfBz5KTOoX-J3etekKg558yYKDxAdXdvS7VhPMP55LhIytO6d_KQYH8QyefStUorqIBSUa3-oZly1xQJs96AA-kFuiWvdeB2JI-Z1CyvkpNkXXSlamJaSsSdce7WGE7Qz1_ifdk7tvvbv1KOclSFdnRYiSMPMIpUkjXFgUSzbMT5J1f0nGtvCGZ4XKf6iovKFOY12iT90_11vdn1HTIaet-HV_PV5wmvfpTDp2TxI9cSzfYCEnJN9HMYgaGyhTZ3FPo4e_AtUIR0s3WdFEt5pGhkai7I1nRtPkNtZyj8dfnpBpDMyvTtOQRObp5L4NWAY8dxOoSa_1MJPLYo6UF63NI5wgYxeUj_LnR8Pv9vmrWiTHB5DJHR2Qo-HLX03GKVEccjoXG7a6rjEqohN9pUZb3gJ6hYgue_CA7JuCCBY9npuo-DlDiirg9WV90t7CdDxBxTmwYUv9zlURuTLnMhqlmTBCahfmRs0WuF8QkgtuFW-nZ55q1ozBQw_v1-6XAWbtdtECKGTA2Ne92ITDYY_9C_6mFnPq6KV3Zi-c4ZDQGMvKOyBmnup9L9TajTt2LjzuQ-iva7IB6B58N5HM56FyU42iONCAjinR595Pn23RvuDqBMSc0BPe2sp5Hg5oG0nY6GRNffWYbTg38pjWtNYqbIvRGvRex_gHUM0H4DPZzXHGJjGhrKTw7vqEACnomVKG3GeYg-q_N2nR4UA-qhA2MrWxtekaSD6tY51tvoHIf7w=w464-h619-s-no?authuser=0"
              className="tile ct"
            >
              <Image src={g11} alt="" />
            </a>
            <a
              href="https://lh3.googleusercontent.com/pw/AJFCJaW6sW6vBRSNFIYepivb-d_erK8sUtJCUN5w4-YOyqWUCEL2VakTJPebgT1pEKoa2g6jhQHntAOKqhafaLygmbYdT22Fjy1n34scZNUfzb2JZq9hKpUBSGjXXsPh9w6OzivqnCp_vKSJ0Qj7n38kmak2Y4aatdWvr6wOYtEe-ruNPr_vk-KqDOy9GxZ3BnI4NKF5c4IAD9GyRNcusrxMXOBSFgtP4OH-CV5ITlHBUkzMtBfpVhbM566QkJcLv_a4moy1RzRRxDxa_RnuN0juM7j3F1vZSf1ijWiNzyQXLw_zjy9yQH0fpBT5TShqY8HUzYBiXKnm3qGgt2-VtGc4MN3smAr0pftzPT2ne01affX-FY44OCpeC2_QcbrhfTZIc84eOqGWEIXsUZ43bkV7LhZ8A2cu44Kl--LjK6rZu9tpdCyo-vZ0I1JDCtTEsnASSMzzYyUq55kszSIWxfIyHPw-N9-X63m0aT6lp9XVtsZi1hSMLSMEh2vBxiE_sobTBEi8fbzwxz5aVYxnGKMgu33DH8z98b5M1nilBs1KW5a_DLqdNFZDATBRn51kokOcC6z8uk40uQhvKTTnDlb83rIJbZd2IsTs2Fr0ug0f1kk8OWVJilNSZ3XiTXMCnh4_bLiCkT0HThiGB-tdPm8q_OaRdil2HJ_NJqYHlWD7qEs8tEQUZHV-v3avJmZ89MfXTLdFETr7DGyCzf7NOes8cYKZjkrz-YMHaTyjGi7lyFSUmYrDZBXAmMd6bq-xTlH2cjPR0NqGPc2ki-CSC4kIshDzOYI3bIfX1DTq77bAEmWCH9sFA_1T53nKngT6TaCy3Jjxt7e9xunoFFp6ZIIY6x2llgo8SrJR0aBBri44rWOPVSeWGWALvg05IujV5ffQRw07whzK8_0QaqSYTQzq73vR3XiNBkKG2Nx_RUFlq7fB8CBZDwsGUKrDs8_mVFgh6DPJFPBg7U9c6tg_eoXXA7Zj0OojvgIVmMHuZDbr0uA_nMalAdXrACBOXtdpgWzGnB_FKARB229eQ-Y_tCeV8oQFaDJG57-XahHMfA=w464-h619-s-no?authuser=0"
              className="tile ct"
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
