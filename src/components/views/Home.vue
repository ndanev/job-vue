<template>
  <div>
    <hero class="hero-home">
      <div class="container container-home">
        <div class="row">
          <div class="col-md-6 mb-5 mb-md-0">
            <div class="hero-content">
              <h1 class="hero-title" data-test="hero-title">
                Most popular
                <span class="hero-inner-title" data-test="hero-inner-title">IT</span> opportunities.
              </h1>
              <p
                class="hero-lead"
                data-test="hero-lead"
              >Read, applay and create personalized set of job matches.</p>
              <div v-if="!isLoggedIn" class="hero-buttons mt-4">
                <router-link
                  class="button secondary-button"
                  to="/register"
                  data-test="get-started-button"
                >
                  Get Started
                  <i class="fas fa-long-arrow-alt-right ml-2"></i>
                </router-link>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img src="@/assets/images/hero-home-img.png" class="img-fluid" />
          </div>
        </div>
      </div>
    </hero>
    <section class="section">
      <div class="container container-home">
        <div class="row">
          <div class="col-md-6">
            <h2 class="section-title" data-test="section-1-title">We help you to find the right job</h2>
          </div>
          <div class="col-md-6">
            <p
              class="section-lead"
              data-test="section-1-lead"
            >We believe that you deserve a job search experience that is as human and personal as you are. We go beyond simple keyword searches.</p>
            <router-link to="/jobs" class="section-link" data-test="find-your-right-job">
              Find Your Right Job
              <i class="fas fa-long-arrow-alt-right ml-2"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container container-home">
        <div class="row">
          <div class="col-md-6 order-2 order-md-1">
            <img src="@/assets/images/positive_attitude.png" class="img-fluid" alt />
          </div>
          <div class="col-md-6 d-flex align-items-center order-1 order-md-2">
            <h2
              class="section-title"
              data-test="section-2-title"
            >Your Favorite Jobs with Different positions</h2>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container container-home">
        <h2 class="section-title text-center" data-test="section-3-title">What You can do?</h2>
        <div class="row">
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="section-card">
              <svg
                id="e2b954ca-67b3-41ae-ace8-209a51a7641e"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="150px"
                height="200px"
                viewBox="0 0 925.49161 570"
              >
                <rect x="738.49161" y="540" width="34" height="30" fill="#f0f0f0" />
                <path
                  d="M1062.7458,417A251.96689,251.96689,0,0,1,931.656,638.16c-2.25,1.23-4.53027,2.43006-6.82031,3.59a246.249,246.249,0,0,1-26.16992,11.48q-5.34009,2.01-10.79,3.74c-.34961.12006-.71.24-1.06006.34A251.50944,251.50944,0,0,1,672.966,628.03q-6.28491-4.11007-12.31006-8.58c-2.27-1.69-4.51025-3.41-6.72021-5.18q-9.375-7.44-18-15.77A251.21328,251.21328,0,0,1,558.7458,417c0-139.18,112.81983-252,252-252S1062.7458,277.82,1062.7458,417Z"
                  transform="translate(-137.2542 -165)"
                  fill="#f2f2f2"
                />
                <path
                  d="M870.926,534.6l-5.68018,21.48,21.56983,101.23a253.04514,253.04514,0,0,1-176.3999-9.07l16.83984-70.61.56006-38.3,1.83008-126.29.46-.24a.35886.35886,0,0,1,.09033-.04l42.8999-22.03,74.02-1.85,55.23,26.9-.41992,1.57Z"
                  transform="translate(-137.2542 -165)"
                  fill="#3f3d56"
                />
                <path
                  d="M901.18984,719.14383a18.07723,18.07723,0,0,1,4.82608-27.29588l-12.01468-63.10678,30.81392,12.84144,6.68524,57.95853a18.17518,18.17518,0,0,1-30.31056,19.60269Z"
                  transform="translate(-137.2542 -165)"
                  fill="#9e616a"
                />
                <path
                  d="M891.21227,417.744l7.90639-2.573s25.08079,16.09632,22.69441,55.01212c0,0,.94,20.13752.04242,33.53963C920.826,519.09494,934.62472,671.851,934.62472,671.851H889.93241L870.77856,533.51764Z"
                  transform="translate(-137.2542 -165)"
                  fill="#3f3d56"
                />
                <path
                  d="M865.28915,319.82981a51.311,51.311,0,1,1-51.31106-51.311h.00006a51.18333,51.18333,0,0,1,51.311,51.05536Q865.28945,319.702,865.28915,319.82981Z"
                  transform="translate(-137.2542 -165)"
                  fill="#9e616a"
                />
                <path
                  d="M762.83759,250.90981c6.01081-12.92526,17.64293-10.36982,27.816-5.98853,12.88266-2.85756,25.13491-11.41271,39.01522-6.35323,13.67272,19.88617,59.57811,14.03536,49.81182,46.41017-.01277,7.7577,14.59759,3.24221,12.0469,15.94754,7.73966,24.45127-27.93663,70.75832-48.4176,61.00682,5.06523-9.28322,16.63616-30.36852-.91372-32.45988-37.75247,35.12732-3.8951-66.89035-51.3302-37.222C775.16,306.62427,753.658,265.287,762.83759,250.90981Z"
                  transform="translate(-137.2542 -165)"
                  fill="#2f2e41"
                />
                <path
                  d="M841.35762,662.50461l-81.90643-16.22212L780.453,540.24309q43.47156,16.44225,81.90608,16.22209C839.96651,589.3063,829.79366,624.56934,841.35762,662.50461Z"
                  transform="translate(-137.2542 -165)"
                  fill="#e4e4e4"
                />
                <path
                  d="M829.448,668.73326,747.5417,652.51117c-6.72363-48.03943-.61181-84.20816,21.002-106.0394q43.47142,16.44228,81.90621,16.22212A292.10059,292.10059,0,0,0,829.448,668.73326Z"
                  transform="translate(-137.2542 -165)"
                  fill="#746fbf"
                />
                <path
                  d="M775.17993,639.19526a18.07722,18.07722,0,0,0-23.27742-15.05052l-38.03876-51.76746-11.57544,31.31149,37.8969,44.35888a18.17518,18.17518,0,0,0,34.99472-8.85239Z"
                  transform="translate(-137.2542 -165)"
                  fill="#9e616a"
                />
                <path
                  d="M741.07355,415.771l-6.89031-4.6535S693.1833,414.935,684.7458,453c0,0-6.167,22.87-9,36-1.45708,6.75321-20.88531,72.00017-20.88531,72.00017L720.7458,633l18-27-18-45Z"
                  transform="translate(-137.2542 -165)"
                  fill="#3f3d56"
                />
                <rect y="126.51913" width="34" height="30" fill="#746fbf" />
                <rect x="73" y="246.51913" width="34" height="30" fill="#746fbf" />
                <rect x="126" y="451.51913" width="34" height="30" fill="#746fbf" />
                <path
                  d="M263.50112,222.64887a3.80011,3.80011,0,0,0,0,7.60022H540.9537a3.80012,3.80012,0,0,0,0-7.60022Z"
                  transform="translate(-137.2542 -165)"
                  fill="#e4e4e4"
                />
                <path
                  d="M263.50112,245.44951a3.80012,3.80012,0,1,0-.016,7.60022H438.89347a3.80011,3.80011,0,1,0,0-7.60022Z"
                  transform="translate(-137.2542 -165)"
                  fill="#e4e4e4"
                />
                <path
                  d="M227.50112,495.64887a3.80011,3.80011,0,0,0,0,7.60022H504.9537a3.80012,3.80012,0,0,0,0-7.60022Z"
                  transform="translate(-137.2542 -165)"
                  fill="#e4e4e4"
                />
                <path
                  d="M227.50112,518.44951a3.80012,3.80012,0,1,0-.016,7.60022H402.89347a3.80011,3.80011,0,1,0,0-7.60022Z"
                  transform="translate(-137.2542 -165)"
                  fill="#e4e4e4"
                />
                <path
                  d="M385.50112,690.64887a3.80011,3.80011,0,0,0,0,7.60022H662.9537a3.80012,3.80012,0,0,0,0-7.60022Z"
                  transform="translate(-137.2542 -165)"
                  fill="#e4e4e4"
                />
                <path
                  d="M385.50112,713.44951a3.80012,3.80012,0,1,0-.016,7.60022H560.89347a3.80011,3.80011,0,1,0,0-7.60022Z"
                  transform="translate(-137.2542 -165)"
                  fill="#e4e4e4"
                />
                <path
                  d="M153.2423,306.65471a62.55523,62.55523,0,0,0,39.66875-28.0084,59.9451,59.9451,0,0,0,6.01322-12.82909,1.50128,1.50128,0,0,0-2.84049-.96755,59.52931,59.52931,0,0,1-30.72781,34.5628,56.35748,56.35748,0,0,1-12.67462,4.29515c-1.88955.39853-1.33259,3.34646.56095,2.94709Z"
                  transform="translate(-137.2542 -165)"
                  fill="#3f3d56"
                />
                <path
                  d="M182.47186,271.56226q8.11161-4.56825,16.22337-9.13658c.25053-.14031.95192-.67159,1.21384-.60809-.21-.05092-.01939.10465-.01317.29463.00838.25572.04065.5154.05023.77288.05872,1.57928.08746,3.16027.13119,4.74l.25144,9.08508c.05293,1.91223,3.047,2.13966,2.99348.20491L203.02707,266.25c-.06765-2.44417.5437-7.86545-3.41639-7.39683-1.429.1691-2.75029,1.17026-3.96916,1.85669l-4.93755,2.7807-9.52241,5.36278c-1.6769.94438-.39381,3.65733,1.2903,2.70888Z"
                  transform="translate(-137.2542 -165)"
                  fill="#3f3d56"
                />
                <path
                  d="M227.56192,426.4134a62.54742,62.54742,0,0,0-38.48965,29.574,59.85394,59.85394,0,0,0-5.48876,13.05246,1.50128,1.50128,0,0,0,2.89284.79752,59.55355,59.55355,0,0,1,29.383-35.75361,56.32036,56.32036,0,0,1,12.50006-4.77757c1.87077-.47222,1.07808-3.36628-.79752-2.89284Z"
                  transform="translate(-137.2542 -165)"
                  fill="#3f3d56"
                />
                <path
                  d="M199.745,462.65263l-15.67691,9.66509c-.2687.16566-.53282.34647-.81245.49369-.27757.14614-.563.14166-.38358.31781-.242-.23761-.18027-1.11882-.19839-1.3878l-.30535-4.534-.6107-9.068c-.129-1.91607-3.13-1.93042-3,0l.71691,10.64506c.16324,2.42387-.28831,7.44036,3.42248,7.23758,1.65223-.09029,3.22631-1.44749,4.58025-2.28222l4.47912-2.76145,9.30277-5.73533c1.6405-1.0114.13547-3.60744-1.51415-2.59041Z"
                  transform="translate(-137.2542 -165)"
                  fill="#3f3d56"
                />
                <path
                  d="M279.149,630.30624a59.547,59.547,0,0,1,36.69675,28.19536,56.29657,56.29657,0,0,1,5.18634,12.33582,1.50128,1.50128,0,0,0,2.89283-.79752,62.54113,62.54113,0,0,0-30.76171-37.5465,59.83177,59.83177,0,0,0-13.21669-5.08c-1.87249-.47265-2.67129,2.41986-.79752,2.89284Z"
                  transform="translate(-137.2542 -165)"
                  fill="#3f3d56"
                />
                <path
                  d="M306.2492,666.243l9.30278,5.73533,4.47911,2.76145c1.35742.83688,2.92553,2.1918,4.58025,2.28222,3.70982.20273,3.25919-4.81291,3.42248-7.23758l.71691-10.64506c.1298-1.92722-2.87074-1.91923-3,0l-.6107,9.068-.29207,4.33688c-.02236.3319.06453,1.30933-.21166,1.58493.1972-.19678-.00835-.10288-.2285-.23656-.32017-.19442-.64809-.378-.96754-.57494l-15.6769-9.66509c-1.648-1.016-3.15644,1.57791-1.51416,2.59041Z"
                  transform="translate(-137.2542 -165)"
                  fill="#3f3d56"
                />
                <circle cx="68" cy="71.51913" r="14" fill="#746fbf" />
                <circle cx="44" cy="345.8493" r="14" fill="#746fbf" />
                <circle cx="195" cy="540.51913" r="14" fill="#746fbf" />
              </svg>
              <div data-test="section-3-read">Read Our List of Jobs</div>
            </div>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="section-card">
              <svg
                id="b85b6090-e265-40b4-b5a6-f759bbd384f1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="150px"
                height="200px"
                viewBox="0 0 753.87469 703.82827"
              >
                <path
                  d="M578.47505,103.95771l-23.06843,12.58664L271.19846,271.61447,248.13,284.2011a48.1793,48.1793,0,0,0-19.1955,65.29607L440.57765,737.39072a48.17922,48.17922,0,0,0,65.296,19.19561l.05958-.03251L836.15907,576.37545l.05958-.03251a48.17924,48.17924,0,0,0,19.19553-65.296L643.77106,123.15338A48.17929,48.17929,0,0,0,578.47505,103.95771Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#f2f2f2"
                />
                <path
                  d="M585.11115,116.11916l-27.323,14.908L282.08828,281.455,254.7657,296.36278a34.30947,34.30947,0,0,0-13.66965,46.4988L452.73916,730.75513a34.30947,34.30947,0,0,0,46.4988,13.66952l.05958-.0325L829.5234,564.21377l.06-.03274a34.30935,34.30935,0,0,0,13.66926-46.49851L631.60954,129.789A34.30936,34.30936,0,0,0,585.11115,116.11916Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#fff"
                />
                <path
                  d="M589.66653,236.52147,466.505,303.72109a8.01411,8.01411,0,1,1-7.677-14.07012l123.16157-67.19962a8.01411,8.01411,0,1,1,7.677,14.07012Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#f2f2f2"
                />
                <path
                  d="M631.641,244.43106,479.45984,327.46442a8.01411,8.01411,0,0,1-7.677-14.07012l152.18119-83.03336a8.01411,8.01411,0,1,1,7.677,14.07012Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#f2f2f2"
                />
                <path
                  d="M415.87223,275.74837l-113.5479,61.95419a3.84082,3.84082,0,0,0-1.53151,5.21006L349.14436,431.53a3.84075,3.84075,0,0,0,5.21,1.5317l113.5479-61.95419a3.84075,3.84075,0,0,0,1.53153-5.21l-48.35154-88.61735A3.84081,3.84081,0,0,0,415.87223,275.74837Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#f2f2f2"
                />
                <path
                  d="M650.7763,348.96263,483.723,440.11051a8.01411,8.01411,0,1,1-7.677-14.07012l167.05327-91.14788a8.01411,8.01411,0,1,1,7.677,14.07012Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#f2f2f2"
                />
                <path
                  d="M692.7508,356.87223,496.67791,463.85384a8.01411,8.01411,0,0,1-7.677-14.07012L685.07384,342.80211a8.01411,8.01411,0,1,1,7.677,14.07012Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#f2f2f2"
                />
                <circle cx="197.03853" cy="382.67177" r="34" fill="#f2f2f2" />
                <path
                  d="M928.81234,263.78816H552.494a48.17927,48.17927,0,0,0-48.125,48.12512V753.78907a48.17922,48.17922,0,0,0,48.125,48.12506H928.81234a48.17922,48.17922,0,0,0,48.125-48.12506V311.91328A48.17927,48.17927,0,0,0,928.81234,263.78816Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#e6e6e6"
                />
                <path
                  d="M928.81283,277.64235H552.494a34.30947,34.30947,0,0,0-34.271,34.27093V753.78907A34.30947,34.30947,0,0,0,552.494,788.06H928.81283a34.30936,34.30936,0,0,0,34.27051-34.27088V311.91328A34.30937,34.30937,0,0,0,928.81283,277.64235Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#fff"
                />
                <path
                  d="M875.14319,385.51745H734.84151a8.01411,8.01411,0,0,1,0-16.02823H875.14319a8.01412,8.01412,0,1,1,0,16.02823Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#746fbf"
                />
                <path
                  d="M908.20141,412.56508H734.84151a8.01411,8.01411,0,1,1,0-16.02822h173.3599a8.01411,8.01411,0,0,1,0,16.02822Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#746fbf"
                />
                <path
                  d="M703.79234,336.71073H574.44224a3.8408,3.8408,0,0,0-3.83984,3.84v100.95a3.84075,3.84075,0,0,0,3.83984,3.84h129.3501a3.84076,3.84076,0,0,0,3.83984-3.84v-100.95A3.84081,3.84081,0,0,0,703.79234,336.71073Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#e6e6e6"
                />
                <path
                  d="M609.92406,398.70111a34.087,34.087,0,0,1-8.804,23.076c-5.656,6.20712-14.07618,10.3236-22.57327,8.62043-7.82416-1.56829-14.18219-8.4067-13.389-16.6795a12.356,12.356,0,0,1,15.2668-11.09515c7.43265,1.92885,10.39415,12.64095,4.20051,17.669-1.4862,1.2065-3.62136-.90359-2.12132-2.12132,4.0944-3.32385,2.8295-10.5954-2.11244-12.419-5.75371-2.12311-11.84978,2.44324-12.26355,8.32554-.49057,6.97428,4.85221,12.22646,11.40422,13.463,7.08789,1.3377,14.11532-2.29,18.91808-7.29718a30.95507,30.95507,0,0,0,8.474-21.54183,1.5009,1.5009,0,0,1,3,0Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#2f2e41"
                />
                <circle cx="416.15529" cy="266.1673" r="53.51916" fill="#746fbf" />
                <path
                  d="M636.47981,387.08916l-.05566-2c3.7207-.10352,7.001-.33692,9.46582-2.1377a6.14794,6.14794,0,0,0,2.38134-4.52832,3.51432,3.51432,0,0,0-1.15283-2.89453c-1.63623-1.38184-4.269-.93457-6.188-.05469l-1.65478.75879,3.17334-23.19043,1.98144.27149-2.69922,19.72656c2.60743-.7666,5.02344-.43652,6.67823.96094a5.471,5.471,0,0,1,1.86035,4.49218,8.13264,8.13264,0,0,1-3.2002,6.07325C643.90266,386.88115,639.78694,386.99638,636.47981,387.08916Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#2f2e41"
                />
                <rect x="431.16715" y="256.92907" width="10.77148" height="2" fill="#2f2e41" />
                <rect x="397.16715" y="256.92907" width="10.77148" height="2" fill="#2f2e41" />
                <path
                  d="M609.57212,445.34074a53.00636,53.00636,0,0,1,12.89014-5.93,8.56789,8.56789,0,0,1,.02-4.71,9.42609,9.42609,0,0,1,9.12988-6.63h13.04a9.45955,9.45955,0,0,1,9.15039,6.64,8.532,8.532,0,0,1,.01953,4.7,53.16732,53.16732,0,0,1,12.89014,5.93Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#2f2e41"
                />
                <path
                  d="M700.52232,344.39072a11.57143,11.57143,0,0,0-3.52979-2.87,8.36739,8.36739,0,0,0-3.8501-.95,8.77158,8.77158,0,0,0-5.10986,1.72c-4.07031,2.88-6.89014,9.09-6.89014,16.28,0,9.02,4.43995,16.5,10.21,17.80005a8.25321,8.25321,0,0,0,1.79.2c6.60987,0,12-8.07,12-18C705.14243,352.81077,703.33238,347.68076,700.52232,344.39072Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#3f3d56"
                />
                <path
                  d="M590.6024,341.86076h-.00977a8.57836,8.57836,0,0,0-4.4502-1.29,8.36738,8.36738,0,0,0-3.85009.95,11.57143,11.57143,0,0,0-3.52979,2.87l-.01025.01c-2.79981,3.29-4.60987,8.42-4.60987,14.17,0,7.76,3.27979,14.38,7.87989,16.91a8.54175,8.54175,0,0,0,4.12011,1.09,7.72431,7.72431,0,0,0,.96-.06h.00976c6.16016-.74,11.03027-8.5,11.03027-17.94C598.14243,351.01072,595.01255,344.52073,590.6024,341.86076Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#3f3d56"
                />
                <path
                  d="M582.77242,373.76a1.50127,1.50127,0,0,0,1.42151-1.98,58.49864,58.49864,0,1,1,112.68726-6.5747,1.50006,1.50006,0,0,0,2.93554.61914A61.50091,61.50091,0,1,0,581.35116,372.739,1.50077,1.50077,0,0,0,582.77242,373.76Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#3f3d56"
                />
                <path
                  d="M666.10324,329.57746c2.11924,2.89278,1.07447,6.79121-1.15837,9.28528-2.90548,3.24541-7.53877,3.45016-11.5618,2.8478-4.51431-.67591-9.3026-2.7909-13.87293-1.3656-3.89537,1.2148-6.67418,4.74793-10.7211,5.63537-3.589.787-7.88081-.25477-9.139-4.08016-.60459-1.83823,2.29142-2.6261,2.89284-.79751.81395,2.47478,4.32865,2.42543,6.34145,1.74012,3.22689-1.09867,5.71374-3.77105,8.8854-5.04749,3.73933-1.50491,7.79621-.82549,11.60323.03181,3.58831.808,7.718,2.006,11.29267.49665,2.64515-1.1169,4.74985-4.635,2.84717-7.23211-1.14219-1.5591,1.45985-3.05738,2.59042-1.51416Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#2f2e41"
                />
                <path
                  d="M874.932,513.49157H684.63034a8.01411,8.01411,0,1,1,0-16.02823H874.932a8.01412,8.01412,0,0,1,0,16.02823Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#e6e6e6"
                />
                <path
                  d="M907.99023,540.5392H684.63034a8.01412,8.01412,0,1,1,0-16.02823H907.99023a8.01412,8.01412,0,1,1,0,16.02823Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#e6e6e6"
                />
                <path
                  d="M874.932,610.705H684.63034a8.01411,8.01411,0,1,1,0-16.02822H874.932a8.01411,8.01411,0,1,1,0,16.02822Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#e6e6e6"
                />
                <path
                  d="M907.99023,637.75267H684.63034a8.01411,8.01411,0,1,1,0-16.02823H907.99023a8.01411,8.01411,0,1,1,0,16.02823Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#e6e6e6"
                />
                <circle cx="386.2497" cy="420.61448" r="34" fill="#e6e6e6" />
                <circle cx="386.2497" cy="518.61448" r="34" fill="#e6e6e6" />
                <path
                  d="M874.932,708.705H684.63034a8.01411,8.01411,0,1,1,0-16.02822H874.932a8.01411,8.01411,0,1,1,0,16.02822Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#e6e6e6"
                />
                <path
                  d="M907.99023,735.75267H684.63034a8.01411,8.01411,0,1,1,0-16.02823H907.99023a8.01411,8.01411,0,1,1,0,16.02823Z"
                  transform="translate(-223.06266 -98.08587)"
                  fill="#e6e6e6"
                />
                <circle cx="386.2497" cy="616.61448" r="34" fill="#e6e6e6" />
              </svg>
              <div data-test="section-3-apply">Apply for Your Right Job</div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="section-card">
              <svg
                id="bd39674f-7494-4df6-9e14-6d27d34693d1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="150px"
                height="200px"
                viewBox="0 0 710.23219 530"
              >
                <path
                  d="M941.46434,547.018H411.24785a13.6672,13.6672,0,0,1-13.65176-13.65176V206.42419a10.01282,10.01282,0,0,1,10.00127-10.00167H944.94172A10.186,10.186,0,0,1,955.1161,206.5971V533.36626A13.66721,13.66721,0,0,1,941.46434,547.018Z"
                  transform="translate(-244.8839 -185)"
                  fill="#f2f2f2"
                />
                <path
                  d="M922.12246,527.68479H427.97453c-7.24371,0-13.13676-5.51856-13.13676-12.30161V230.67785c0-5.03053,4.36687-9.12339,9.73463-9.12339H925.36329c5.45675,0,9.896,4.16033,9.896,9.27368v284.555C935.25932,522.16623,929.36606,527.68479,922.12246,527.68479Z"
                  transform="translate(-244.8839 -185)"
                  fill="#fff"
                />
                <path
                  d="M954.926,205.64327H397.4045V198.693A13.71279,13.71279,0,0,1,411.106,185H941.22457A13.71273,13.71273,0,0,1,954.926,198.693Z"
                  transform="translate(-244.8839 -185)"
                  fill="#e6e6e6"
                />
                <circle cx="177.42087" cy="10.34224" r="3.54401" fill="#fff" />
                <circle cx="190.87307" cy="10.34224" r="3.54401" fill="#fff" />
                <circle cx="204.32527" cy="10.34224" r="3.54401" fill="#fff" />
                <path
                  d="M635.8865,447.65564H900.51425a13.23808,13.23808,0,0,0,13.23807-13.23807V314.82168a13.23807,13.23807,0,0,0-13.23807-13.23807H635.8865a13.23807,13.23807,0,0,0-13.23807,13.23807V434.41757A13.23808,13.23808,0,0,0,635.8865,447.65564Z"
                  transform="translate(-244.8839 -185)"
                  fill="#f2f2f2"
                />
                <path
                  d="M871.62283,381.23866H660.64112a6.619,6.619,0,1,1,0-13.23807H871.62283a6.619,6.619,0,1,1,0,13.23807Z"
                  transform="translate(-244.8839 -185)"
                  fill="#fff"
                />
                <path
                  d="M871.62283,409.36955H660.64112a6.619,6.619,0,1,1,0-13.23807H871.62283a6.619,6.619,0,1,1,0,13.23807Z"
                  transform="translate(-244.8839 -185)"
                  fill="#fff"
                />
                <path
                  d="M834.39077,353.10776H660.64112a6.619,6.619,0,1,1,0-13.23807H834.39077a6.619,6.619,0,0,1,0,13.23807Z"
                  transform="translate(-244.8839 -185)"
                  fill="#fff"
                />
                <path
                  d="M505.9326,501.20649a10.05574,10.05574,0,0,1,13.594-7.27737l23.4593-26.95627,4.98283,17.88869-23.04128,22.8556a10.11027,10.11027,0,0,1-18.99481-6.51065Z"
                  transform="translate(-244.8839 -185)"
                  fill="#ffb8b8"
                />
                <circle cx="389.80253" cy="165.14844" r="24.56103" fill="#ffb8b8" />
                <polygon
                  points="360.949 503.221 348.689 503.22 342.857 455.932 360.951 455.933 360.949 503.221"
                  fill="#ffb8b8"
                />
                <path
                  d="M608.9592,700.10483l-39.53052-.00146v-.5a15.38605,15.38605,0,0,1,15.38648-15.38623h.001l24.1438.001Z"
                  transform="translate(-244.8839 -185)"
                  fill="#2f2e41"
                />
                <polygon
                  points="397.949 516.221 385.689 516.22 383.992 470.062 397.951 468.933 397.949 516.221"
                  fill="#ffb8b8"
                />
                <path
                  d="M645.9592,713.10483l-39.53052-.00146v-.5a15.38605,15.38605,0,0,1,15.38648-15.38623h.001l24.1438.001Z"
                  transform="translate(-244.8839 -185)"
                  fill="#2f2e41"
                />
                <path
                  d="M639.34562,692.59112l-9.54687-1.124a4.51224,4.51224,0,0,1-3.97388-4.4043l-1.78906-124.33887a1.49985,1.49985,0,0,0-2.91357-.47851l-13.24561,37.39941.94727,70.10156a4.49833,4.49833,0,0,1-4.22876,4.55274l-12.46387.52929a4.52692,4.52692,0,0,1-4.74439-3.9248l-6.50976-79.30078-.00415-.04981,9.8772-82.81933,74.1831,5.36719L644.3405,688.64971a4.50657,4.50657,0,0,1-4.46631,3.97266A4.40053,4.40053,0,0,1,639.34562,692.59112Z"
                  transform="translate(-244.8839 -185)"
                  fill="#2f2e41"
                />
                <path
                  d="M591.06682,516.07549a4.47309,4.47309,0,0,1-2.35474-3.61816s6.6709-41.48437,9.11548-42.26269l-5.34864-44.36329a40.90929,40.90929,0,0,1,8.78052-30.49023,39.01332,39.01332,0,0,1,27.03174-14.48242q1.12134-.10109,2.23047-.1543a39.36853,39.36853,0,0,1,33.134,15.082,40.11988,40.11988,0,0,1,7.21949,36.40625l-2.99976,10.43946v72.95605a4.55528,4.55528,0,0,1-1.86182,3.65332c-9.34106,6.85547-19.897,9.2793-30.15551,9.2793C616.44719,528.52081,598.101,519.84112,591.06682,516.07549Z"
                  transform="translate(-244.8839 -185)"
                  fill="#746fbf"
                />
                <path
                  d="M533.47755,502.72488l-12.90242-9.64814a4.49946,4.49946,0,0,1-.59686-6.67226l76.863-82.47429a15.05276,15.05276,0,0,1,19.52127-2.07541l.00021.00012a14.97782,14.97782,0,0,1,1.92527,22.97632l-78.96383,77.50169a4.47169,4.47169,0,0,1-5.36242.70857A4.62136,4.62136,0,0,1,533.47755,502.72488Z"
                  transform="translate(-244.8839 -185)"
                  fill="#746fbf"
                />
                <path
                  d="M632.22613,491.80493a10.05578,10.05578,0,0,1,14.71505-4.60685l28.08641-22.09373,1.54966,18.50493-26.90892,18.14357a10.11027,10.11027,0,0,1-17.4422-9.94792Z"
                  transform="translate(-244.8839 -185)"
                  fill="#ffb8b8"
                />
                <path
                  d="M657.36516,500.43a4.46445,4.46445,0,0,1-3.02295-3.249l-2.83716-11.916a4.43718,4.43718,0,0,1,1.65039-4.61231l19.08887-20.64453-28.07862-43.2959a15.24849,15.24849,0,0,1-.46191-18.626,15.242,15.242,0,0,1,26.29468,2.99414l26.104,50.81054a23.11846,23.11846,0,0,1-7.72095,29.79493l-26.67675,17.82031a4.46126,4.46126,0,0,1-2.97046,1.13672A4.54941,4.54941,0,0,1,657.36516,500.43Z"
                  transform="translate(-244.8839 -185)"
                  fill="#746fbf"
                />
                <path
                  d="M652.88575,372.10551a4.39849,4.39849,0,0,1-6.49318-2.5649l-.01539-.06128c-.50024-2.04355-.10536-4.18241.02383-6.28233s-.08861-4.40488-1.52657-5.94066c-2.68052-2.86288-7.4138-1.31231-11.27146-2.01917a9.51063,9.51063,0,0,1-7.45268-10.117c.05255-.43662.13628-.87389.23045-1.311a7.32469,7.32469,0,0,0-7.65072-8.82988c-3.89344.24353-8.091,1.446-11.32878-1.42141a8.35087,8.35087,0,0,1-2.05309-8.99159c1.81153-5.32069,6.99681-8.12883,12.13466-9.68478a44.5881,44.5881,0,0,1,37.8262,5.99911c3.26265,2.2737,6.31357,5.13619,7.71889,8.85636s.76213,8.42656-2.34866,10.904a20.12271,20.12271,0,0,1,4.76546,19.52057C663.92834,365.14164,656.58987,369.94774,652.88575,372.10551Z"
                  transform="translate(-244.8839 -185)"
                  fill="#2f2e41"
                />
                <path
                  d="M679.78205,715h-147a1,1,0,0,1,0-2h147c.55225,0,.44776,1,1,1C681.03008,714,680.3343,715,679.78205,715Z"
                  transform="translate(-244.8839 -185)"
                  fill="#ccc"
                />
                <path
                  d="M518.19515,302.83393a12.13174,12.13174,0,0,0-11.39215-8.01014H256.98809a12.09951,12.09951,0,0,0-12.10419,12.09482V498.63269a12.12137,12.12137,0,0,0,12.10419,12.10419H506.803a12.12137,12.12137,0,0,0,12.10419-12.10419V306.928A12.01155,12.01155,0,0,0,518.19515,302.83393Z"
                  transform="translate(-244.8839 -185)"
                  fill="#fff"
                />
                <path
                  d="M518.19515,302.83393a12.13174,12.13174,0,0,0-11.39215-8.01014H256.98809a12.09951,12.09951,0,0,0-12.10419,12.09482V498.63269a12.12137,12.12137,0,0,0,12.10419,12.10419H506.803a12.12137,12.12137,0,0,0,12.10419-12.10419V306.928A12.01155,12.01155,0,0,0,518.19515,302.83393Zm-.712,195.79876A10.69318,10.69318,0,0,1,506.803,509.31287H256.98809A10.6932,10.6932,0,0,1,246.308,498.63269V306.928a10.69315,10.69315,0,0,1,10.68014-10.68014H506.803A10.69321,10.69321,0,0,1,517.48318,306.928Z"
                  transform="translate(-244.8839 -185)"
                  fill="#3f3d56"
                />
                <path
                  d="M499.64034,320.61951V454.481a3.369,3.369,0,0,1-3.3678,3.37018H269.03194a2.83844,2.83844,0,0,1-.483-.03754,3.367,3.367,0,0,1-2.88717-3.33258V320.61951a3.369,3.369,0,0,1,3.36789-3.37012h227.2405a3.369,3.369,0,0,1,3.37018,3.36783v.00229Z"
                  transform="translate(-244.8839 -185)"
                  fill="#e6e6e6"
                />
                <circle cx="78.05858" cy="182.27417" r="29.56668" fill="#746fbf" />
                <path
                  d="M415.66027,458.38782H270.615a2.95326,2.95326,0,0,1-.542-.043l68.59973-118.82458a4.80315,4.80315,0,0,1,8.361,0l46.039,79.74054,2.20562,3.81561Z"
                  transform="translate(-244.8839 -185)"
                  fill="#3f3d56"
                />
                <polygon
                  points="170.776 273.388 121.254 273.388 145.564 238.076 147.314 235.533 148.189 234.261 150.394 238.076 170.776 273.388"
                  opacity="0.2"
                  style="isolation:isolate"
                />
                <path
                  d="M496.42043,458.38782H370.96819l24.31018-35.31146,1.74945-2.54376,31.67835-46.01752c2.07681-3.016,7.073-3.20377,9.51477-.56885a5.71879,5.71879,0,0,1,.45618.56885Z"
                  transform="translate(-244.8839 -185)"
                  fill="#3f3d56"
                />
              </svg>
              <div data-test="section-3-create">Create Your Own Job</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Hero from "@/components/Hero.vue";
export default {
  name: "Home",
  components: {
    Hero
  },
  computed: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>