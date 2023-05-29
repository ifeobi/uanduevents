import React from "react";
import Image from "next/image";
import AnimatedDiv from "../components/AnimatedDiv";
import g1 from "../public/assets/images/U&U_events/h3.jpg";
import g2 from "../public/assets/images/U&U_events/h14.webp";
import g3 from "../public/assets/images/U&U_events/h15.webp";
import g4 from "../public/assets/images/U&U_events/v2.jpg";
import g5 from "../public/assets/images/U&U_events/v33.webp";
import g6 from "../public/assets/images/U&U_events/v4.jpg";
import g7 from "../public/assets/images/U&U_events/v28.webp";
import g8 from "../public/assets/images/U&U_events/v9.jpg";
import g9 from "../public/assets/images/U&U_events/v31.webp";
import g10 from "../public/assets/images/U&U_events/v8.jpg";
import g11 from "../public/assets/images/U&U_events/v7.jpg";
import g12 from "../public/assets/images/U&U_events/v10.jpg";
import g13 from "../public/assets/images/U&U_events/h5.jpg";
import g14 from "../public/assets/images/U&U_events/h9.jpg";
import g15 from "../public/assets/images/U&U_events/h4.jpg";
import g16 from "../public/assets/images/U&U_events/v6.jpg";
import g17 from "../public/assets/images/U&U_events/v29.webp";
import g18 from "../public/assets/images/U&U_events/v30.webp";
import g19 from "../public/assets/images/U&U_events/h13.webp";
import g20 from "../public/assets/images/U&U_events/h6.jpg";
import g21 from "../public/assets/images/U&U_events/h12.webp";
import g22 from "../public/assets/images/U&U_events/v25.jpg";
import g23 from "../public/assets/images/U&U_events/v26.jpg";
import g24 from "../public/assets/images/U&U_events/v24.jpg";

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
import Head from "next/head";

function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery - U&U Designs</title>
      </Head>
      <div className="aboutpage-container gallery">
        <div className="gallery-header">
          <h1>Gallery</h1>
        </div>

        <div className="gallery-body">
          <div className="contain">
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
                  href="https://lh3.googleusercontent.com/pw/AJFCJaVQreypHx-7rmkpTjN5_9hz1Fz1cp-MR26rc7M4PG2W4__zubrl8QqHUSPc0qBXzw_oBpaACX3faj3rIyIe-6BFAc4eUc6uaVTXTLzA2R3tqXwJ6w0ogUAE3sylE440L2nMhDnE8XoKf2JjYcxQsrAmyhRKwkcxEnAVK-nZpPLWfgWigKLOHqQ-VZVaQpc9BfLjTSRUBls7mLTuvsGmmvVGdWYiaNCCE452AfmL6dWKix_VChDW6tbyUM95zvgA68eOLLxja_06DlSDgxmpaqZqhG03sAznfVyHiTisOwr043Nnw3Ugk7iZJFH-TzCVG6YCo6jB0fIbtvhv9Xh_Jelc7KNfxmg-HFDEdgW89f1OBx1SszBma53aUdaEO1PFnJHIt_VFEFZDCIfHpgbSWE80JcpnRLbb-ROaR9kVXlrvvio_37C-FHK6hfzwMqxv5ALyrPpab-gMVYoeB3UhpUAB0bQ7I0KIBFKu4pDpcntzn4hT3_298WLnSbPsLYbJOaAkGJmRXQd372z8bB09l6Ux8InWpwUDUgiRARs1CicLVju2n582FJT5PAH0xmk8B9Cw3cC8Ly3dWGf-AZ9tHwBjUg1ger5Y_VfdAPGpwFHglzvJQ1ttIG2oG09NfkRhTvRHLGRRqfP6tdU4gO22KB5lGUKBEQNqAQYQRgThJV6M6NSV5IBdXzPj4ex1rx8xKKdo3tsg0xVevP8VQ-ZEwQFPj3-w-S6OpCsC_b5gH82Dim1HV2Cxs2Hlcg35o0Sf61AKwZIch7egfp3e56RpKvUKyZAW_Ds1wkn0d6HqboEirMGWS76Fkp-VUMO05neHPBmmpaZ1i4asCfMXDCaZT-jH3bGo8f4V33ssoHQq8bT4fuxh_1AqRsVA0Rl7bofYNUbjX8aKy7ujlc-oepBRES3-C0poShhG8ETWY5jXBhqA_RDKelQI_fV9TlDJ78gfNkqFwAcrlYx9qD8GaWnDvvM8OmX_PAd_rnKYBVv-Xosa2aru--DjOtC8H_QVmS66g62GG3Jbfo1JR7r5oqeNFsXIJ090IHajgY6vfA=w503-h377-no?authuser=0"
                  className="tile"
                >
                  <Image src={g2} alt="" />
                </a>
                <a
                  href="https://lh3.googleusercontent.com/pw/AJFCJaUxd_BFSMW32Xt0HJtAH84lTpuoUQVYp0pggEmCr8s4jVgXoMgorUQSdJpN3S6fLgmPKJ5LUuyYQvxST0_x3yiiBRFuAsZAkYtPpsAK8GlvO6w8QV2hAK5TqjY_7iIOzvPUYpoZRESh0m1lo0Q-hKAX6yARrj-6hxonlD3agzeUsSXUJVmI8O9XHC5ta4NqxeCaPtVjklmVtPWcgTKlH5ahXs95DlV0ayMMnwAA0PcP-3G-RrNqZeujB9NQQ6ozXx9cpIoG18aTm1Zaj9IQVR-bJIZl_Cc61Z1YthxWfaaQA7z4v-JYDfD0mUK-fcC8tY9lIhqgy-GpQkr7YTB89xkWzbfwweSrC6i4a94XkepuUFs3733SCXp1cu5PsflVWkXfpx_bZ9tXpCRH8_YwNaQG48-sDfwQz56aHkIU-bVMy4-V9NidTUYSxxVm4Zk4tIVH0ywKCBWNbbuH3-70Fnkd6Jq5GUMEYxkhSFHuPN0ASqugmLu-PIJ3VJCtoKwV1dYbU052HdhA7ghxpFJkSBK6g_fr5sH9ReWll7e7-a9v4uV5V8sj70fUIL5NMf650h52PnNZ-gwtC7rJt09fvJvOVgLYrfwrlBN6RoVAl3VuMp3fa0rBPSArhX741FQ9dP5Sp0PzQKrr1HYSus2CT1r8JoDqIEDSZ0deZ4PvRtbmD1SCo_l5gU5izxpQA7dYFcwLITVTx1a3AmSeFoFbbmkBkvIz1bphQ3SZCruzfsOaurtquZCHO7Rg8wDCCuEW3nV2NGlS0FbBhii34Cb5CWjeUXfBpyUNq0IHAxGEE2KKn8bTSMfcthJs8_W_KpwwLh6JkIu8XrF9Hw-RSztSkZZsU99L06xjxyXtUUrasLYD68R-n_8l9pQq5EMe2JB6jPGcI3_jysbZG-jMG7NBWaq6ID3YSYikGDfoLfePRWAxImPD5iQE_6R20zIs9mjtjhssMOCEm7Zo9AJNN2aKRhFkuZaszzuNvJgVgkVuo4Jql1jx1GLBYk2k7CFzxxNBTA6Lcn0hYYEJ1uSQv13_iXL6vROdZz-G4yJAHw=w930-h619-s-no?authuser=0"
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
                  href="https://lh3.googleusercontent.com/pw/AJFCJaW4dZze8P_WiiWrf4WoMl11fiikUy5dII177O2OJ5qxsqqJG5jSxWcx4zb75Pq4O72d-PKFFHCKN7rbJwaR3uzVdUbYNDP3jLb8_ehy4z8wCo__QRE_2CtTdF6y4rgckJ4OsQZTWTqU_QTrqEcjtfKyesLpC9Oz52RNJebAq3tpcpQ2Q23Orumv__kA9vTs7OCj-OyvKwQEJEEDEHvQzA9CjYFTU-boUaaUEi0yUvaad3r_I9ln2bPFWDuWcB1xmavDkI4EayvCr7ZlZ93VnEIqdb-x0wfiGPNMTBTew5ZCz1iPKSg29xDfUEyAtyDGJOcgRDF8vZfnp0Bgkie-1Va2Xb3W0QxK93lbgo6t5Q9fInLaMX64g_Py3HSln9hS00IDNvTNd4WhgeA1mpoJYhM1kK8boHneKM8n3DKstc-p5HApkYnircOi1VOT-Oxf7WZAWe28aDWwcn6HPCupitjn9V07rLiMkuDMdXtIIBngFsQ9PkUhUmcZvupe01cZtfp63DKjaew1pTsT_Bu8KBSJFaqtW9pOcZYX2W16aHYmGCOYbPfeYOAmRIVcfg11j-tA9wUIkYAtSdc0mCjlIslPhbCaKBmPesPxsPe586kOX6lIPo8-fliKcfeJeGeQFi84eikMyuaXgn6lc4j5BI_LvmEKH1gXj4zUZocXdAW_HW1EUeUMIWpl6kh7Z6Tp5RgU0PfiuMr71VWpPaTmy9avBBEJroNmnhG0nPqa6R9wc9Phk1aXNL4tIATVzqv9cMjHU1xHpFR0w5qI1AfcZ_ZmgLqphkOxkKDLtIULmkM7exsH0JDB4ax9Cn5RhJGCTvgrDMQma_n31CmhgkCHJ8Nqbo54ecen4LUH9NYRpQrCbnAfDBdtj1-kMObLb2bkIppzu0t0Ysy07_IBLiv5ugCGGrfUpW1aeop5_LutmZ9SJMsQhQFGEiA2gqheRSEiiHgAyiD8iBP38eIsXfWn9FYyPca5eQ1d7cFk7Y-ZalehATcXNYpIGQ_x0p3ZPBYpi54S-9L4cKwFAjpTz1xwBBEktYAHKVULwWtadQ=w464-h619-s-no?authuser=0"
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
                  href="https://lh3.googleusercontent.com/pw/AJFCJaUoYTzVZstusRF_TA3Ug0G5a1SXgT3X-85e-yHIvC0eIOvbyUAq31JRGDzA51Al6ReNpakI2Yh8a5XNi4UIswjshAOfZQq1oQTSDTlw-Djud_AwSE9soIHPzc1iDJMednHuLL0R8cxN9ul_NRivCj9BrWWbgr4JxyN9AGnoh5xGN1igUP-szsufnoNGmiPgvqfmYwTcObXj_O_Amd_yie3S9vWYDyv61qCox4zN0nzsNHsIaxHq3RM_EXxS-x3XKL_ZVGLz5vCwd0YS-HgYu2d1ChO6tz8Ilir_sLpaJeKoHiaxNePWOOJ1o86ARXyMAgPigIN35yrP8uNMRyvrLJyefUdTQ-4v5NjDW-u6kDSknLP7lV732t27-II5yjaz4QPMnA8aCPoIKPbUa8twzFxHqvqGKJon_V9RQBTkyGi3ZcpK-CL2PswvTzjUshE8FXBhfFm67AYxRXtNhhywZXvA6SF3VhdSa106jEkYOcTu6bFLQO7sooWLgFfy6q7n4jwMJCrbkF-Sx5WDeDVRlupx8ldMHuAJNk7rs4VrTgYqaNC9i-MEISnDhQiXf1-ZSVcK8nuhJcda-pR4t-hB02jB_k15cQMiQ20QvMhr0E6sFuY8Dx6Ud9NbL0Udt-pnylvOtgZopSZkf1VstgA2xw78URencSVSdAQb1vJ1L5HritZLWf8kp5ikfF5uh3NwrAg9VdagofpVVvJhL_D-jLVJYSrATZEo_O4zWM2TLsXYulwiAqU35vzPjDyI60HxI2OT11sHE8S7gIUUMCqTbwirMUSloyPXpWytJ-uIkbmSv5wxLdUEEiB2di_5SA8qFYiDR6hQlMwLSswWplnkQDbu91ylZFmxPfWxRUFa-Btcb-9g_Ky83FPlHXbpfZ9bK8Gjmwt2K2p8Nls6P77_jAf5e3-cN9P8snsEkFgWxsCyWW-74vOte8QbT9AXwZrfcRY1cdocARxWj7CVxq9m-nGdMrPMMXELOZY74CmhwCr2DDo87guHc4Z4cyNgjKJscTsBE1TU8dzvFWKtZrHhN8gQ9ux6g1YhY1sItA=w464-h619-s-no?authuser=0"
                  className="tile"
                >
                  <Image src={g17} alt="" />
                </a>
                <a
                  href="https://lh3.googleusercontent.com/pw/AJFCJaXh8tMg75sVKGi94pngIJJjMBEUxQHqp-yjVpeyZCXpT7O3yYp3PvUQxTD2cmvTnQ7n3EJOBEjACFPGiB87_tPI4ZUHlQUeHnjXCX5U3ENTM87aL4tjJqDPMngOlyBQW6IUd6z_YZw7oSW12Y9lEb0aNgxdqvmqRIPbQ_Rrt0igumkLaW5AecoHMM5rMW7LBhp0i3L5Ft3eEP6X7A-90Tj-dk3__0FOK-Kri4MYEv4p3guxFTIOHITdpRaHuFcqpeVMkIXym0YFFVWUM6wARYXaGlPNLfywTDUxzCpsS_Y6TSo-EGZzIE21dIBxzmhdOEDFuHLIVp-tgbMaciI0GPFuVTju1okOQsq1hFKsXea5jtY7ekGxSqqDbWQmymUg1k_YYsvha8zCmSAxvltZYtpZMRNdG0p6eMMX-r_dp6JHBRdjUtGdvRkgAu3YVATFConJlwgzXFGuFEiGgttO23Gb2uJRvOsxrvBY3DGKVeFWfkmd2xle3L0gdfCzbGK-lGaKIzGY-B4A6FBj7l-ObOb-HX3JGJVkz7RsZIzKF3G64EicMvsVfFaLbQklP73Lqs3VqQhEte3QoGzXU5FHCWdECc7xs7wblBqsUwPKK8bK6nxatQC9iUzwZfC97MgiMJqQviDXhbjE8yVFEbRfr6UL3W2adLCbM3C0pmKJGJ3yh9_vfS6pmnMKWSI4yF8gre3hY65hDwLB8-oTSKXqDZGvlOtzVs4OuU0PyVwJhZ19zOoX1fT7ANyBWVkFZJngwU81gH-9WamcaEiarG6kM_MUlI8IdHopnfho-5ggS39cE0Cea8KwjOdy_apkqRd4Xge7T_KLscW8WiUQGHVNwhFWnQbP7pqlhxDlizrO8DmijYv7hQNMJ2u5qN2VpTCvZGWAMzRwV2d08pAxBlxhVE79oJN5MyDSdBfNK_3kgplBnQzr4vxhcsXDZEGYV2vadxysxXfIG7GGh6ZJfucGf0A6B_U30p9kmsRz30Gvivrx3Ax0J2fvqHv9mx3iVMHHq-DazS4QmkgzanYqpTyZRpSsIYtrfEEnKkrnDA=w464-h619-s-no?authuser=0"
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
                  href="https://lh3.googleusercontent.com/pw/AJFCJaXKF3_U90uIChGzodCvsmQy0yuXqEUoY4ytBq0986kyW-rNCLHOGchVIa_qpKwGFVigc1fSM2uqEUyRGhw1RnfsDMIB0hgo8ydPKZkbuwVT0yQAVCAPRmYZGPxOKpwWB42bpwsOaMDGqRcXp4bHQIlljvX38rO1dNZMVSm3Eu6V8LWp0SngFWlnFTG4kDfGEK8-_5_EqSAeWAEJ7lM3FV3XVdq3bHwkP-FZ2Swv0g0Nipa1ietO3syTE13keRkJlZe-zNAxXfUw9KB0KADFHU5kl36C90MZDALky9f_RXYtkkcluPOfDDI7Oy4LkjvZH1JnUdLWlQarpbkSqRV4tf4xwuQIkrJ7yb-rKTDjiY3c-PMMgyOIEIpkH_c6TPpNAfk548olV5c_XXNR0SJT7GtnDp3gSR9KqVBVK98hdSDkCkGbBK0NmzsxdSyeiqKvx9ipvFWc5JG2EkiaepEseaKxuRQW720uoagLnSn40gCI_ZuDp4R2_0uqPU3R1jvJA5nk5cutAaXulY0wWwyCBCNpLwaUQnK1-C0pBZ-cQ3W_Ap4cc3hPVFm0qknR6y0j1NeAuMIq9qmsSiMzSCjum7BaaG5RW9Y3LzeBiSeowzhLtzOcpewY48y5EZMeJ3hBV1uQcqkbNielmDGQJyzYKSzwX1YEtZhIeXg8ObXw32z7LZPgk1-F_QGDovuxJD-9fCfjwkFVBVn2X3jeza6ckJkdd-gzvZRENeYCCGWFaFDhjTK64wdUMCG-TMqkZ3unTIC1fen8HKlZ77igiyN_Hg4yqU2dxu5lolEh0ytNTDLJEm1o7ZgVoh0ih-JpB0v7PoV_CVzNS0zhuDofFuhGPIQon1yAm1kBCV4wjzAuZaem_8KtpqCWhaWVXgYc0OdMIE-29YPpXjWPGs3Qz9bhOxiqGYPtaPMEF563bOo6sTIeXJR_6Yrl_Us6z6SFsflswRwnlNltnSO8Z74CsR9mXSM0F-jXG4tAjp8rhVUugXK0GKRtCcIR3CMv8wBNe8wff9zRu416-BWCLySjgR0QehSVHEUomloMcvSEHw=w464-h619-s-no?authuser=0"
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
                  href="https://lh3.googleusercontent.com/pw/AJFCJaW8i9GXHW3jgmsPlTegKdzIPAWKhqLoI6Ta7xl1QeQrdpPGyWVp1WdCO1KFSYhilqkFk7wS110BisxVuSIgo7dDdSDVTAQXBUYrzjGvJRE-g16caFOx5dEt0WDfgS6ALmDJmWV0jXyTGlrMqSsqRzCbkaUIgQ9zBPDfsf2lUVQ1nEGZT25VCdcpEtb07egmnQkOB1wYz-I_3yjiFy5qF-assfocUFDtTEOl3ZLzb816vc4WtNoOMFVGXLCufppVbZ2OTipEsCtLxBRxBt_1weH6rqgw1zQBTYr4BWqeMARvqGvn-cNo8RvGuXLQ8Mcly1s92ZSbk-d8zR5jN-zVA-9G-uPRtdF7UT4EnbBuoClUXBtILS6uLGZpJQ3fros5Rx0-T8uDA07GyZe2CGS7T8IfKdpscq3NJPOB6DhLIkyrQAbrE01To9ZwkE2Ye65O5v0ijazg0ICSQIToJGo_6Pv-YfIZfHDIbWJ8ksFHRvcokOn9nX4k3Tw2W0d6AwkCgEUtwJC8xmJsayOoY7TXNavkLEt84z5A9sTmKGM1dVLiOSr7aHQPWAeXcWloHmsqIKj1Dok9Riawo8B-FSL4XQS2XcfMejceulLzrSvK_QxBy_IAboYDKnf6GFvd9qOxIw9tEEpjt8m9wPo21xVPY26JB5nr7sACaNqlSFsOfDi21AdqXo70yV-7FFyjmTl1lmIo27S5_ixL1zS7Nu2NTw9k7JtjAXnkKfFFfec1pEzCwV1xsOvNZeSov0FUyXQs6xTDWRpF8ZSidxY0dR5cC5B-K59N0WVq-V_XLWIFzs6-WTDPuIOrjYmODHEnsutkEn4D3jCInzwHC4d_A7xJSJ5Cj9u07fhEf7r4WhAIUwUCOQvKR7hy_LzXJpSzqodTopKSqMlqcfoWv4CCVYhPohG8-Qzp9_qOvs7wl1Ukg_MVBuzVwFkeFN8EPY8OaI_3OTlXBdTUHTB5KPKkUM2Oj_iqA9KczOqX5sgRhTdBUainH45RkmqskB45RemsGi8fm3-IZbsWfZZF9EWDucZfxpknK5xh9pUqpQyyAA=w464-h619-s-no?authuser=0"
                  className="tile ct"
                >
                  <Image src={g9} alt="" />
                </a>
                <a
                  href="https://lh3.googleusercontent.com/pw/AJFCJaUB3egBLwWCCaRoZ-3_77hJBHcjhjDrqaypwy1YasB31KyI3XcDQKNXhrqf8C4bXDtH1mzsuP6wDq003JICLWNIt6C_QUoCkO84QTLZP8owNElAg-blqQkxluQohvW-Sr_fAcEOdXqZAY7pcWDU9roTNdChtxcjjkOfzYWNGDUA0Bq-_ylT7VZnE11QpOmBtxfT8nQpbqZQamFOfaFFr2U8JzieIToyn5lkq8NR1dhxjTdfbUmEDjy6aw8IL2ZgLy0tNeZ9jOpWuTG3leM6xe5B54wi0G4QmYQME1Cfw8I2hBTK2RWjkJmftBHC6HajuY6huHHdXFnXnGGLNhhI6NXsB75gZt6hfNJ-MSrTgHzOcVzYchpjViEtQgYS3MrZYjfG8u6bcs5IUK9ir_RnIkt8eVfSQ3FqHKAYSFnJd0pzis0gh8HUX4RMYDSNqzHEuYQsneOT7TbqKeZfQyovJeM05lGywn80nzYd-sZaSYkl_HI5QknH6QT7iH0wxK0P8gu5b1PduI8G15ibYwlqykFyNU85pEJ-vGAAkCGwF8gM0xnQqyNCYBTYF3ut-GycWJ6Piea_yon7AAnl2avk_QS9Ks986SpztPbwfALwkdTM-70zzeLHmg0GSpxhYktqlQ6zZVJu4oM2DdqFSj419eZnp27Y7gGSjjX_T0Zlcr21LiTe3hCECxS2BsBomQTcjl2a4DuZijXqEBUSNWzOXQU0SHk7r1SqVCZDG2tiPmaiwMMs76QhS4jzeJvVdhucEe2d6oZAF96MIDStd6Dh9olGU--xrsjAKBW4yealE09Agh7xaeZbAD3ufQ9VzOzzKt_Ju64jWlQEkB-zmp-eUNnKAgLXt3IRERC_b8_2hsLiR0tmA-njxlzkRiMnEnGwYsdiFkWYmMmKDYM0aTWkYvVyvY6KWMU2vuRyr5LrfCpmx4CpwJ5nP-CP4LRwStrOzHGy7cZmae8XlUo-aJ1dF1vaO4K5E0eTu4O8i_lBayBpJrP5nSRuUIebbmjnvWGZqywulOsXkYQmW9tQhlwPl6e3h-cV8tpIE0-1VQ=w464-h619-s-no?authuser=0"
                  className="tile ct"
                >
                  <Image src={g10} alt="" />
                </a>
                <a
                  href="https://lh3.googleusercontent.com/pw/AJFCJaUB3egBLwWCCaRoZ-3_77hJBHcjhjDrqaypwy1YasB31KyI3XcDQKNXhrqf8C4bXDtH1mzsuP6wDq003JICLWNIt6C_QUoCkO84QTLZP8owNElAg-blqQkxluQohvW-Sr_fAcEOdXqZAY7pcWDU9roTNdChtxcjjkOfzYWNGDUA0Bq-_ylT7VZnE11QpOmBtxfT8nQpbqZQamFOfaFFr2U8JzieIToyn5lkq8NR1dhxjTdfbUmEDjy6aw8IL2ZgLy0tNeZ9jOpWuTG3leM6xe5B54wi0G4QmYQME1Cfw8I2hBTK2RWjkJmftBHC6HajuY6huHHdXFnXnGGLNhhI6NXsB75gZt6hfNJ-MSrTgHzOcVzYchpjViEtQgYS3MrZYjfG8u6bcs5IUK9ir_RnIkt8eVfSQ3FqHKAYSFnJd0pzis0gh8HUX4RMYDSNqzHEuYQsneOT7TbqKeZfQyovJeM05lGywn80nzYd-sZaSYkl_HI5QknH6QT7iH0wxK0P8gu5b1PduI8G15ibYwlqykFyNU85pEJ-vGAAkCGwF8gM0xnQqyNCYBTYF3ut-GycWJ6Piea_yon7AAnl2avk_QS9Ks986SpztPbwfALwkdTM-70zzeLHmg0GSpxhYktqlQ6zZVJu4oM2DdqFSj419eZnp27Y7gGSjjX_T0Zlcr21LiTe3hCECxS2BsBomQTcjl2a4DuZijXqEBUSNWzOXQU0SHk7r1SqVCZDG2tiPmaiwMMs76QhS4jzeJvVdhucEe2d6oZAF96MIDStd6Dh9olGU--xrsjAKBW4yealE09Agh7xaeZbAD3ufQ9VzOzzKt_Ju64jWlQEkB-zmp-eUNnKAgLXt3IRERC_b8_2hsLiR0tmA-njxlzkRiMnEnGwYsdiFkWYmMmKDYM0aTWkYvVyvY6KWMU2vuRyr5LrfCpmx4CpwJ5nP-CP4LRwStrOzHGy7cZmae8XlUo-aJ1dF1vaO4K5E0eTu4O8i_lBayBpJrP5nSRuUIebbmjnvWGZqywulOsXkYQmW9tQhlwPl6e3h-cV8tpIE0-1VQ=w464-h619-s-no?authuser=0"
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
            <br />
            <AnimatedDiv>
              <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="container"
              >
                <a
                  href="https://lh3.googleusercontent.com/pw/AJFCJaW68xm6HC7P54S2ZcvaW2NXBy3gByzyECUhP2mRFL_PpkqjIfIP-5kRabgRM_R3FfvvAhaDM_BEofhSBvMZ1yUH0E-pyw0hVp_JsYr77Ag4Lzaqd0TF0mWpiIMCuyPKvf38BaeIcN3ehbUHbgxakhSBhxSN0Ma10FkCXnmFujuD_farOpxCLCWANPMlbL-_E-Fa6SGtGfUP1wMKmRm78n8vibMRppB6Cpry47IKhmhWHkALRwGJrJTnOtUHA1cAt1ZtCZY0qVo77Mj9oq2QWz9Q6j_BGV4brZPVNGj9lpJ6VH9L4qGgxx6mVUBu-FouOStM2JDul1M2QN074FtJZxkqTxQrbMH5LJOsc4EO4IuFZLj2U4FU0IfQXk-bTtbNYJya1L0zxzeZHDuhxINMwMJRlIcGf8fDpmKw3-dxeIb9zNlSe19nIrq2HPQP3KJjou69zbpGN43sYego5mZh-dWy0ZMLpWDxcGuB9Y8-qjE3szK3SY43HCzcSg0pWEaCb8Ww09rHdwqkukplM7qmMtOaH7ueteTZiX_k1OtrOaZ3PpUB9VixMZ2A41I6CXb5IL7L-K0goPX-9fhdrAVfEtqvStcuoetCAQSCTsubsUrCopGv9GR-fBDc_pZyqgkeYPdIEK0fUZ3b849rqKXnw9s3_8zvm0T5Y1h0w6pyyGbgYjPBCxZleauUbbm4nmLYBWl65k-L53xEKDY5dD3asuCT5rci1z-570qg_IAS69IzeAuiww6p0eQapUjOyQf6zcK6SZ8D9jj--jUajb9TGZ3VmWuek9Hlwi2vsZztg362prA-6tGLpZQNlW6Ytji-el_aBywCyBXhj_EXikeF2Yo3hQuMRJph2L9Aa7u2CyRe8xcCMnaDeUqDN9Q2yiNSiYso5j3HQ2pUhA8-ipPFxS9rQ3i3jgMMsRhNhQBG9_wYj9A71MQs_fiI-Z07RDCuuXA0ruZBDHMzlqcN33d_MdxkG1KBdwp7801ppjT-qDSfFCb8fO33y04_7mi-yU8amxoaZw69sbEu9Wms54kjESET30biQ6TEwcNXZA=w930-h619-s-no?authuser=0"
                  className="tile"
                >
                  <Image src={g19} alt="" />
                </a>
                <a
                  href="https://lh3.googleusercontent.com/pw/AJFCJaWVIWlhd93kndCSV-8raWRQ5WdKf7ONjSZNMEt1dV-yYpZJETAiyqfH40VSlsQ-n2TUbQba5s52g_eY20Y6N5ovdUNJOyRU_MgvieiqcRUJ5A0ZLRUn5RtsaprY-dOEGlygfxJnR3syyxwYL7knaT9DUZlMreKg6XRPIHSBm3nRKkmLfdHw0RKfc2x82DQ3FoSSVA96Oa_oe-DxOMFqU-jIUfRPmax-syqsetZS5VFF9kQk7hNmwtzbmKJ6EVTaZcNI1VkdEt9VHZ_6vgPf7-13w4s2il4h51DFf2f3kv8xB7IalquJRfs5lhRcc7xFQOj5Shk-6grLl0XL2XWMMNDylOAuXadE2V_oVFmwLAWXM-2x4T73yQzwJOgyiiucZHGKzcJovxzv_9A6weqzlTWFB2Nv6OwGOIUjj6hylXDzXz8-bRRjrCaE6AsN_n7LNFLD7-_wELUe0ntNn5sXXa9SIRhWn5mQEanyI_8ngMxO9wzfYN80OGhavtBOEuxk2vzfebVljF0zr7w5NveVudE3s8yPXEda5F0WDT7bhxi8NpMDAvgl_BcSubTr7fbah-08I8W0BZvpHrfP98KdNsnm_H8lo1z9xsIqD8SU34ZwC7DZNcCAXOlNf2s9kdpEa2lsij0oWxfG2B9LjcMU_YnldGZBGJdDkf-INiwTr70gKZpz9_vFObQLXJdVvyaPzfhCA7m5vHXPqN3Z03Ro9IAFOOGJju7nFxq7wFppAPlKFf0-v-fLdReaKJjpL5gFr1xMHQqVBaMNY0gw6lnl7W6NBs7BOM71fTXeu8x_HN2HwJCb3p0Cy5lUxhOopoP-Cdf-GblcUU4WVoKzkHqpnLsmhgyY4fYsyjZ56fo5BgMnah1eI9XK4CaFJrDpDJLafjLYsPP38w_wyb1k3GJNFXffdy7CNaohZOp59e8RVfZpOkUKxHEr985udgeYaHOf6WPpPXCC3H241CBN32snj4wAyp-v_L6V-3r_c7j8qI-UJjTGNsJc6_E2bmW5J2WseoKRrYThRzap_4HOPn_tt3HLRUO5mSY7DGl12A=w450-h300-no?authuser=0"
                  className="tile"
                >
                  <Image src={g20} alt="" />
                </a>
                <a
                  href="https://lh3.googleusercontent.com/pw/AJFCJaUy59InMnMwuJZzgrTQHA_OfUz6cMmuYz95Nxjy-XpV1Or4BC8BpDN74e1K0hyToDOlO9fIkNRtvckINHvbfY64_AnNMq5IgxHfzMIMIShr_8LNtejPYkJPpYKOvjDDvm0nhn8JPHE91K2CQg2mu5twn7qy2f-oszMNQgz8TdfHfnVzlA9pDdWVx08aG6feafb4xRrqZ6gae9u5_Da_s9-27ppBfWtZgX1diNxAdeT4HBC1g8koUUvc47geK_RTL-uoOA-4ij9pVXKP0bChTMmUI663ijfadDFDIjqTl0cq_EeOlQNRLco7WbAizCWVJEGmA4fLEDkTg89r1ezTU-8OdeoQYzfp6DvsERRRbkxRolo805GkbVWpqA3QSobsYHvC3OZLS6rAkxSqgejhsA3HdqUgkJDXm-IKhXdbkgg5qd-1hiwiRtABh44bhL0-arwRO68Mbbu05glG3_gzeDAZEC2qd_khSQIO43exSW6RedhTKFHEbXAU5HHnzcEeeOmnrsKGPVVMCgMEEXp9E8Z5ZUM0R7XdCKoG8_H5k7pgfo77nRADwwlUGRagZswdVIG8F0q8rVME0LDR2CJhAkrTeoXNkL1ffhLYbN6NYIaO7AmbbYOs3zJO04xVwNDQBvVvUberiJjlCudUWcozLSIJ8ySDZUyixAwU2Vz2dQrtXD9ST3K7tDO_PaYPxcFm7C2iTbucKqqBpCu93tluJt6RzOnolNdAMnFG8VZ4lJboZefM5jbsAP_i8wo9_ZldI8nVMWpSuWx8zINuCnTOau02tgEn3C52lKyLlrFd0zCx65my9ZVy0c5gyuSQ-3xjklZPk-4HZ0fnYSYaSohvgoTE74EptqXrXs-_DYYcOYytnG7aJo87Y-aaB_fDzoSZsxozQPAqGO3mJQ4-rNNjQKE9x9jZmcS2pIhUAFVFG_B1FzA5DHkRm2NsX-1X0hEa65ODjf9qj8lbNN-45pA1sYlWLrfmOI1cz-WS5bLLzmbTrMt0u7WEVrU6Wz6UsMbj2CK9PuG56RVUslqWzmLU_vxHr8bF4viRsx2TMg=w971-h619-s-no?authuser=0"
                  className="tile"
                >
                  <Image src={g21} alt="" />
                </a>
                <a
                  href="https://lh3.googleusercontent.com/pw/AJFCJaX10id9VeyPlvgRI1kwblpzdH2novJ4_I3UiUJRpnHdWm3intVMox8JYLhJ24vm4QUL8FIhiWtnlSy4Vs8muP_wkVQHexGKYGNyXrMJaCBAVuZw7Yrnb-lM0lsBl0X5I36oEJCwVezQG84xHHitZ8ULq7cOC4fw1KOMnmjQvScKBhwrxlpSi4BsJBYiPTxgvfTYc1cS3pu3mFhpl0M6jArueSv5feC6iVZ_1ckVxKNNwujnrT9mxepwPtTJMkm7xpK5eI8WON_vazf10qZhmDOfRAEFxTBCg9EsCNA_UHOUyPF8T3WRAiw3TjhjujM4HFkpH_c6pX6Du87AuqnwgA6CJOuOtdH01L_fq6U6Oia1-8Y7In_rsKvPPpNme-gEzV_okKFM2oTjV6LM1ZPDLQEVzzvbE9hqmMrTaCyufOBjOBkvLUmQzJ7bla0R7dQH-tQWSd3-3XgVrRfSrKd2ImtPJTps-TOr2J_hG7PZMHCxqUoeUSdX_-AAd-T6hHx9nvP8hx0mgA6xA9WKLBfH6HXYGEOXW9iD-3m85itXZ7cRZYgx4-LDt_SnhcNNa5lRqVSdvxsR5TQrq7DPel63Lspy1CST4tzDELi9hifOs8a-1_DXGm4zjz1QjBpCljZskqCFRlfhXSWl-mEQR012ZkBrQzWjR9pKSauqqEsaM62eVSr6Zc57uxwqxkFPx1Grov7zvlxGqTnEx6CsgHXCmQO9zpbWmE8Pk0dHJ5kQa8gRBv-wSSG7x-ccUFrpZTILVYtpb-Execy3cDqp6Y62FbbE4MjlHL0deIgMr1CkLEu_zF3KZoDkfJEGWKq-_M3MGNfvh-EVD_G7bdU7xU_Py6MNNFt6yYD3NPe46Euuj214oTaNaLR5mmJuetY0XK2w-AAJEsDRNX4vyO6s0A7q7kQBt8NGW9qdORbQ4IKa6PSc80dQB-UjrmZi-eZica3eTnm3s7vQEM59l_jUy06VpmMZRgZvL0d9xw5OPmfBN1NKlESxoB8tVmS5e_68bLnjfMrqMEuR0_ecOPh5H0trnmeg7xayVJ4sWd_Xow=w427-h619-s-no?authuser=0"
                  className="tile"
                >
                  <Image src={g22} alt="" />
                </a>
                <a
                  href="https://lh3.googleusercontent.com/pw/AJFCJaXFga0BBy0T4GBeIQXP0sJwAY3THjRHggVLq6XaY_FZUVxIEu-9iHGO6aWLRQmv1bPkGQ_s9nT_UN5qzq4YutBPAwTUe3C3oQntvUanTXv6PwNJl-3kmmSUVZYSgilu1Z1gISuK1Er6YkKhT_iPySk8hrtxSACkQLZZGAOcrxct4QVI5nQYnP_1RTAwnwhGw7GTr9tSuRPGaG5U8_ZsBSLm9t0g_MZKkPQP2s_9fvb832SmRZfkYhs591tbQqetzWTEBZ9g0dUW8O9xHN2mmkEH2ngw6RhZjETL92jN27mEN7kI1gr0LL9Jjf1HOfAI1NWtxSe2V0ivXvi_1j5_K7KKY7F13SQW8OPNM3YRUQAlxst5Mc63WoTCpUAdYQHeU7tA65J0zisVxTsiHWnO5frf6BH-XLmOMZZUnHq5a_02ygVBIloErqK3UDx_yPVNF68Sg98_Qooz2dfD_fopJNTh28uLL2Whq12MXMkT25oe-I0SPRI12W8aLl-QM5ZbFFT9mKD1P9jJRqtyYxbH23XY_o96i1jzk7W18zICUNZt-qq635fZoqIpZAS262c94AqzJyOE8wG6EhAVPX2sKTRxzqtg7AJWTuFyBw-V64yMX4Rb5CwXEkkUyadb7OZcVyrtDfDLftTMB09m47KnOKF7dDuymnVCU_Zi6lnyz4_5SUMR6EXxEIrHtrkCxTwl-cVbrV6n9547M62kX_mfSzVXuIhYAH8CPm8VBnhFZvjWQyjpV4lEWgfxfg5MnLVrXp8j52xprOP9qv0y3tiAO4EwUlP-PqpkcZuGFMMntqyMph3XzZCFSU_de6rmYnuZbPHH4vz1kDNIo9aSR8mN4HjoNpbqellhGXbmBFXAYnhW_TvKQ3BCcMHackdC1tl1rNQzxMFHwqCXwuIwm7q2A3oaIfgkFotfALR_iIEIx7DUfls6482-M0bCMecp1HwNb3S97gvh71z1anrZmxmxqpF7AVlWf4BlTfCxTz_WPF2hjksbGT4dET16MfYjgRIeqpicxXPq95uBziAV57vXtk3fTxjH6DJMmTELww=w495-h619-s-no?authuser=0"
                  className="tile"
                >
                  <Image src={g23} alt="" />
                </a>
                <a
                  href="https://lh3.googleusercontent.com/pw/AJFCJaVGuyP5urXQ402npv8X_pJBCqdptn8AsnyCN6NT8GxuqlDJE5TM43_Ks0i4Yok8ztv_9JX1H47I0Of0FrBKiCbe054WtTw_1FDMPLQ6H23ziBNGR-gOHYcRP8WBzWnMF5VrNA6bVYJLgV0BIDDgEp8e--OWbNGM4yWHdzwoH-nlH3V0PbCJz0olbjsis0DOMmj-AUksTTFthFDkEvOcG4Qsflyb2kHch2kaHcKVcYpjKIId_6kOx5c4VhyZEp2giZQAbuH4kcOQZxqQ2k8sDd8CQafkSpQemZzuhzAl8BVKPR_QyeJ1NVRl0oE-1gvlvK8z5A84hqB2TG7UqSXOx8LvuZC6RZISploxrE-yQh6M5Wu8f9-_xzXC_YmVPX45obLFk-l_77HllzwtUOMvNYUQa6NOJKfwb7hA8WaGJv7Z3fWMeyFAVg2HpTawKwBesEfKg8dDWDt2nIaoDN6ZrLJ9aufUI-gRyVGO7f49ebe7DKrZCjexr3lZU-VSS3bUPvC2Uf8lRUwY4qowhXmPEeNM0Bf5zcMI8mSodjJOzvQAdHj4EtecXlBvTsX6mbK44D_Gk0yTMV_xX4vXl1CaTN0KcQjOrIlGhAAca8wYiMbsR3sZiCE7BWTpEi4e_rQmu-QeSQOecbbuBbW9XCGKJK_gFS-WWAW9dqmuWJI4VXZgKUk03zRw8JIAW-MXlpxgcB85eURDRA7SAC6KcjJbQ6YwMQPXj1iwDVheoMGr9jC_v5SH7hMwsM4vSaZ6-4uLaeN4mUl7ZXJuhXJsDIVUUwv9a5vdyOZKM3xoIONz4xd3peoYYTQf43hNcM8YNHGb030WN_Z-jy3isl3A_gdYAfvN-K-LU7ZmDVhjMpJbWocNmbY7gYaK8w7ekyVmvr3Vau3WgWGxo8RAOxkmsR09KBaXBguRiXlB8jZWNL1VTWi2XeCjAktlTceGHGF1xIx_3ql_flDaytl2y-UxT9lq0e70ecHulldgdFAOpvWWp-4G2wusVIc_MzUfHPYxxIjzhsw--aypfyFLMqMWOxCVqEDnjvqUj1-hpuHpTw=w214-h285-no?authuser=0"
                  className="tile"
                >
                  <Image src={g24} alt="" />
                </a>
              </LightGallery>
            </AnimatedDiv>
          </div>
        </div>
        <div className="gallery-middle"></div>
      </div>
    </>
  );
}

export default Gallery;
