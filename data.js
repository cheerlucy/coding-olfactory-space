// News Data
const newsData = [
    {
        date: "2025-09-19",
        title: "CHI Submission Complete",
        description: "CHI submission work for this year has been successfully completed. Best wishes to everyone for ideal review results :D",
        link: ""
    },
    {
        date: "2025-08-21",
        title: "Paper Accepted by EMNLP 2025",
        description: "Our exploratory work on artificial olfactory conversation systems has been accepted by EMNLP 2025 (Findings)!",
        link: ""
    },
    {
        date: "2025-08-10",
        title: "Featured on CCTV News Broadcast",
        description: "Our research on odor collection and data visualization was featured on CCTV News broadcast.",
        link: "https://mp.weixin.qq.com/s/KcFaqQgADb_ZxsodvpAJ7g"
    },
    {
        date: "2025-06-17",
        title: "LLM Demo Accepted by IJCAI 2025",
        description: "LLM Demo in collaboration with Xueyi has been accepted by IJCAI 2025 Demo Track.",
        link: "https://ijcai-preprints.s3.us-west-1.amazonaws.com/2025/DM57.pdf"
    }
];

// Research Projects Data with Images
const researchData = [
    {
        title: "Bio-inspired Olfactory Systems: Learning from Nature's Chemical Intelligence",
        summary: "Drawing inspiration from biological olfactory mechanisms to design novel biomimetic sensors and electronic nose systems, pushing artificial olfaction from 'sensor arrays' toward 'perception systems'.",
        description: "Olfactory systems in nature—whether insect antennae, mammalian nasal cavities, or aquatic chemoreceptors—demonstrate remarkable sensitivity, selectivity, and robustness under extreme constraints of size and energy consumption. I have long been fascinated by these biological olfactory mechanisms and seek to translate them into engineerable artificial systems. In this direction, I focus on drawing inspiration from the structure, perception strategies, and information encoding methods of biological olfaction to design novel biomimetic sensors and electronic nose systems. The research goes beyond simply creating 'more sensitive sensors'—it explores design paradigms closer to natural olfaction, such as distributed sensing, dynamic sampling, selective response, and system-level coordination, pushing artificial olfaction from 'sensor arrays' toward 'perception systems'.",
        image: "./images/research/bio-inspired.png",
        links: []
    },
    {
        title: "Olfaction-Enhanced Multisensory HCI: Design Tools for More",
        summary: "Building open-source olfactory interface design toolkits and platforms to make olfaction a design material supported by tools, for more users, scenarios, and complexity.",
        description: "In multisensory human-computer interaction, olfaction has long been neglected—not because it is unimportant, but because it is difficult to design, control, and reuse. Our core vision is to make olfaction a design material supported by tools, just like vision and sound. Around this goal, we continuously build and open-source olfactory interface design toolkits and platforms, focusing on design tools for more—for more users (people with different abilities and perceptual differences), for more scenarios (VR/AR, gaming, health, education, public spaces, etc.), and for more complexity (AI-driven, cross-modal alignment, dynamic and contextualized scents). We believe that only when olfaction is integrated into mature design toolchains can it truly enter the daily workflow of designers, developers, and researchers.",
        images: [
            "./images/research/hci-1.png",
            "./images/research/hci-2.png"
        ],
        links: []
    },
    {
        title: "Embodied Olfaction & Multimodal Foundation Models: Adding Chemical Perception to Intelligent Agents",
        summary: "Integrating olfaction into wearable devices, mixed reality systems, and robotic platforms, combining with multimodal foundation models to enable truly embodied chemical perception.",
        description: "I firmly believe that olfaction can bring a unique and irreplaceable dimension of chemical perception to embodied interaction systems and intelligent agents, filling the inherent blind spots of vision, hearing, and touch in the real world. This research direction focuses on how olfaction can be integrated into wearable devices, mixed reality systems, and robotic platforms, and further combined with multimodal foundation models. For example: wearable assistive olfactory systems that help humans perceive invisible risks and environmental states; home or service robots that use smell to judge the degree of food burning, cooking progress, and the quality and ripeness of fruits and vegetables. What we explore is not just 'one more sensor,' but how olfaction participates in embodied perception, decision-making, and interaction loops, becoming a truly meaningful part of multimodal intelligent models.",
        images: [
            "./images/research/embodied-1.png",
            "./images/research/embodied-2.png"
        ],
        links: []
    },
    {
        title: "Coding Olfactory Space, AI Perfumery & Smell Reconstruction: Toward Scaling Laws in Olfaction",
        summary: "Exploring scaling laws in olfaction through large-scale artificial olfaction datasets, enabling AI to not only recognize odors but also understand and create them.",
        description: "Understanding how odors are encoded, combined, perceived, and reproduced is the ultimate question in the minds of almost all olfactory researchers. In this direction, we attempt to decode the olfactory encoding space and explore the possibilities of AI perfumery, odor perception reconstruction, and generative models. Our core belief is that scaling laws also exist in the field of olfaction—but they need to be built on generalizable, large-scale artificial olfaction datasets. By systematically collecting artificial olfaction data and combining chemical information, perceptual descriptions, and multimodal learning methods, we hope to push olfactory research from 'small samples and strong empirical dependence' toward a new stage of 'scalable, transferable, and generalizable,' enabling AI not only to 'recognize odors' but also to 'understand and create odors'.",
        image: "./images/research/decoding.png",
        links: []
    }
];

// Publications Data (19 papers with complete information)
const publicationsData = [
    {
        title: "\"Where Does This Strange Smell Come from?\": Enabling Conversational Interfaces for Artificial Olfaction",
        authors: "Zhou, Xueyi; Lu, Qi; Chae, Dong-Kyu",
        journal: "Findings of the Association for Computational Linguistics: EMNLP 2025",
        year: 2025,
        link: "https://aclanthology.org/anthology-files/anthology-files/pdf/findings/2025.findings-emnlp.567.pdf",
        doi: "https://doi.org/10.18653/v1/2025.findings-emnlp.567",
        images: [
            "./images/publications/emnlp-olfaction-1.png",
            "./images/publications/emnlp-olfaction-2.png"
        ],
        bibtex: `@inproceedings{zhou2025does,
  title={"Where Does This Strange Smell Come from?": Enabling Conversational Interfaces for Artificial Olfaction},
  author={Zhou, Xueyi and Lu, Qi and Chae, Dong-Kyu},
  booktitle={Findings of the Association for Computational Linguistics: EMNLP 2025},
  pages={10719--10745},
  year={2025}
}`
    },
    {
        title: "What if LLMs Can Smell: A Prototype",
        authors: "Zhou, Xueyi; Lu, Qi; Chae, Dong-Kyu",
        journal: "Proceedings of the Thirty-Fourth International Joint Conference on Artificial Intelligence, IJCAI-25",
        year: 2025,
        link: "https://www.ijcai.org/proceedings/2025/1280.pdf",
        doi: "https://doi.org/10.24963/ijcai.2025/1280",
        images: [
            "./images/publications/ijcai-llm-smell-1.png",
            "./images/publications/ijcai-llm-smell-2.png"
        ],
        bibtex: `@inproceedings{zhou2025if,
  title={What if llms can smell: A prototype},
  author={Zhou, Xueyi and Lu, Qi and Chae, Dong-Kyu},
  booktitle={Proceedings of the Thirty-Fourth International Joint Conference on Artificial Intelligence, IJCAI-25},
  pages={11141--11144},
  year={2025}
}`
    },
    {
        title: "AroMR: Decentralizing Olfactory Displays into the Environment for Olfactory-Augmented Experiences in Mixed Reality",
        authors: "Wang, Yibo; Liu, Ziqi; Xue, Jiao; Lu, Qi",
        journal: "Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems",
        year: 2025,
        link: "https://dl.acm.org/doi/epdf/10.1145/3706599.3720290",
        doi: "https://doi.org/10.1145/3706599.3720290",
        images: [
            "./images/publications/aromr-1.png",
            "./images/publications/aromr-2.png",
            "./images/publications/aromr-3.png"
        ],
        bibtex: `@inproceedings{wang2025aromr,
  title={AroMR: Decentralizing Olfactory Displays into the Environment for Olfactory-Augmented Experiences in Mixed Reality},
  author={Wang, Yibo and Liu, Ziqi and Xue, Jiao and Lu, Qi},
  booktitle={Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems},
  pages={1--7},
  year={2025}
}`
    },
    {
        title: "An electronic nose device with rapid and universal odor detection capability",
        authors: "Sun, Yuchi; Yu, Gang; Lu, Qi; Han, Haoxuan; Yang, Jia-Wei; Xu, Yingqing",
        journal: "Sensors and Actuators B: Chemical",
        year: 2025,
        link: "#",
        doi: "https://doi.org/10.1016/j.snb.2025.137871",
        images: [
            "./images/publications/enose-1.png",
            "./images/publications/enose-2.png",
            "./images/publications/enose-3.png"
        ],
        bibtex: `@article{sun2025electronic,
  title={An electronic nose device with rapid and universal odor detection capability},
  author={Sun, Yuchi and Yu, Gang and Lu, Qi and Han, Haoxuan and Yang, Jia-Wei and Xu, Yingqing},
  journal={Sensors and Actuators B: Chemical},
  pages={137871},
  year={2025},
  publisher={Elsevier}
}`
    },
    {
        title: "Exploring cross-variety fruit spoilage monitoring methods based on electronic nose: taking grapes as examples",
        authors: "Yang, Hongli; Huang, Haochen; Sun, Yuchi; Yu, Gang; Lu, Qi; Yang, Jiawei; Xu, Yingqing",
        journal: "CCF Transactions on Pervasive Computing and Interaction",
        year: 2025,
        link: "#",
        doi: "https://doi.org/10.1007/s42486-025-00191-2",
        images: [
            "./images/publications/grape-spoilage-1.png",
            "./images/publications/grape-spoilage-2.png"
        ],
        bibtex: `@article{yang2025exploring,
  title={Exploring cross-variety fruit spoilage monitoring methods based on electronic nose: taking grapes as examples: H. Yang et al.},
  author={Yang, Hongli and Huang, Haochen and Sun, Yuchi and Yu, Gang and Lu, Qi and Yang, Jiawei and Xu, Yingqing},
  journal={CCF Transactions on Pervasive Computing and Interaction},
  pages={1--16},
  year={2025},
  publisher={Springer}
}`
    },
    {
        title: "Delignified wood for thermal energy storage with high efficient photo-thermal conversion efficiency",
        authors: "Li, Yanchen; Lu, Qi; Yang, Jiawei; He, Weiwei",
        journal: "Journal of Energy Storage",
        year: 2024,
        link: "#",
        doi: "https://doi.org/10.1016/j.est.2023.110235",
        images: [
            "./images/publications/delignified-wood-1.png",
            "./images/publications/delignified-wood-2.png"
        ],
        bibtex: `@article{li2024delignified,
  title={Delignified wood for thermal energy storage with high efficient photo-thermal conversion efficiency},
  author={Li, Yanchen and Lu, Qi and Yang, Jiawei and He, Weiwei},
  journal={Journal of Energy Storage},
  volume={80},
  pages={110235},
  year={2024},
  publisher={Elsevier}
}`
    },
    {
        title: "OdorAgent: Generate odor sequences for movies based on large language model",
        authors: "Zhang, Yu; Gao, Peizhong; Kang, Fangzhou; Li, Jiaxiang; Liu, Jiacheng; Lu, Qi; Xu, Yingqing",
        journal: "2024 IEEE Conference Virtual Reality and 3D User Interfaces (VR)",
        year: 2024,
        link: "#",
        doi: "https://doi.org/10.1109/vr58804.2024.00034",
        images: [
            "./images/publications/odor-agent-1.png",
            "./images/publications/odor-agent-2.png"
        ],
        bibtex: `@inproceedings{zhang2024odoragent,
  title={OdorAgent: Generate odor sequences for movies based on large language model},
  author={Zhang, Yu and Gao, Peizhong and Kang, Fangzhou and Li, Jiaxiang and Liu, Jiacheng and Lu, Qi and Xu, Yingqing},
  booktitle={2024 IEEE Conference Virtual Reality and 3D User Interfaces (VR)},
  pages={105--114},
  year={2024},
  organization={IEEE}
}`
    },
    {
        title: "Mul-O: Encouraging Olfactory Innovation in Various Scenarios Through a Task-Oriented Development Platform",
        authors: "Gao, Peizhong; Liu, Fan; Wen, Di; Gao, Yuze; Zhang, Linxin; Wang, Chikelei; Zhang, Qiwei; Zhang, Yu; Ma, Shao-en; Lu, Qi; et al.",
        journal: "Proceedings of the 37th Annual ACM Symposium on User Interface Software and Technology",
        year: 2024,
        link: "https://dl.acm.org/doi/epdf/10.1145/3654777.3676387",
        doi: "https://doi.org/10.1145/3654777.3676387",
        images: [
            "./images/publications/mulo-1.png",
            "./images/publications/mulo-2.png"
        ],
        bibtex: `@inproceedings{gao2024mul,
  title={Mul-O: Encouraging Olfactory Innovation in Various Scenarios Through a Task-Oriented Development Platform},
  author={Gao, Peizhong and Liu, Fan and Wen, Di and Gao, Yuze and Zhang, Linxin and Wang, Chikelei and Zhang, Qiwei and Zhang, Yu and Ma, Shao-en and Lu, Qi and others},
  booktitle={Proceedings of the 37th Annual ACM Symposium on User Interface Software and Technology},
  pages={1--17},
  year={2024}
}`
    },
    {
        title: "Atmospheror: Towards an olfactory interactive system for enhancing social presence and interaction in synchronous online classes",
        authors: "Lu, Qi; Zhang, Yuewei; Zhang, Yuxin; Ma, Shao-En; Zhang, Yunfan; Qin, Yuou; Gao, Peizhong; Zhang, Qiwei; Xu, Yingqing",
        journal: "Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems",
        year: 2023,
        link: "https://dl.acm.org/doi/epdf/10.1145/3544549.3585832",
        doi: "https://doi.org/10.1145/3544549.3585832",
        images: [
            "./images/publications/atmospheror-1.png",
            "./images/publications/atmospheror-2.png",
            "./images/publications/atmospheror-3.png"
        ],
        bibtex: `@inproceedings{lu2023atmospheror,
  title={Atmospheror: Towards an olfactory interactive system for enhancing social presence and interaction in synchronous online classes},
  author={Lu, Qi and Zhang, Yuewei and Zhang, Yuxin and Ma, Shao-En and Zhang, Yunfan and Qin, Yuou and Gao, Peizhong and Zhang, Qiwei and Xu, Yingqing},
  booktitle={Extended Abstracts of the 2023 CHI Conference on Human Factors in Computing Systems},
  pages={1--8},
  year={2023}
}`
    },
    {
        title: "A review of the interdisciplinary research and design innovation",
        authors: "Xu Yingqing; Wang Yun; Fu Xinyi; Jiao Yang; Yang Jiawei; Lu Qi; Chen Di; Le Huirong",
        journal: "Science & Technology Review",
        year: 2023,
        link: "#",
        image: "./images/publications/review.png",
        publisher: "http://www.kjdb.org/EN/10.3981/j.issn.1000-7857.2023.08.002",
        bibtex: `@article{徐迎庆2023学科交叉与设计创新研究进展,
  title={学科交叉与设计创新研究进展},
  author={徐迎庆 and 王韫 and 付心仪 and 焦阳 and 杨佳伟 and 路奇 and 陈迪 and 乐恢榕},
  journal={科技导报},
  volume={41},
  number={8},
  pages={17--25},
  year={2023}
}`
    },
    {
        title: "Development and prospect of artificial olfaction technology",
        authors: "Lu Qi; Yang Jiawei; Zhang Yu; Xu Yingqing",
        journal: "Science & Technology Review",
        year: 2023,
        link: "#",
        image: "./images/publications/artificial-olfaction.png",
        publisher: "http://kjdb.org/EN/10.3981/j.issn.1000-7857.2023.08.003",
        bibtex: `@article{路奇2023人工嗅觉技术研发进展,
  title={人工嗅觉技术研发进展},
  author={路奇 and 杨佳伟 and 张煜 and 徐庆},
  journal={科技导报},
  volume={41},
  number={8},
  pages={26--35},
  year={2023}
}`
    },
    {
        title: "Cooking Method Detection Based on Electronic Nose in Smart Kitchen",
        authors: "Gao Yingting; Hu Yixin; Lu Qi",
        journal: "Journal of Computer-Aided Design & Computer Graphics",
        year: 2023,
        link: "#",
        publisher: "https://www.jcad.cn/en/article/doi/10.3724/SP.J.1089.2023.20053",
        images: [
            "./images/publications/cooking-enose-1.png",
            "./images/publications/cooking-enose-2.png"
        ],
        bibtex: `@article{高莹婷2023基于电子鼻的智能厨房烹饪方式检测,
  title={基于电子鼻的智能厨房烹饪方式检测},
  author={高莹婷 and 胡懿昕 and 路奇},
  journal={计算机辅助设计与图形学学报},
  volume={35},
  number={2},
  pages={185--194},
  year={2023}
}`
    },
    {
        title: "O&O: A DIY toolkit for designing and rapid prototyping olfactory interfaces",
        authors: "Lei, Yuxuan; Lu, Qi; Xu, Yingqing",
        journal: "Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems",
        year: 2022,
        link: "https://dl.acm.org/doi/epdf/10.1145/3491102.3502033",
        doi: "https://doi.org/10.1145/3491102.3502033",
        images: [
            "./images/publications/ono-1.png",
            "./images/publications/ono-2.png"
        ],
        bibtex: `@inproceedings{lei2022diy,
  title={O\\&O: A DIY toolkit for designing and rapid prototyping olfactory interfaces},
  author={Lei, Yuxuan and Lu, Qi and Xu, Yingqing},
  booktitle={Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems},
  pages={1--21},
  year={2022}
}`
    },
    {
        title: "Design Strategy of Multimodal Perception System for Smart Environment",
        authors: "Liu, Jie; Luo, Dan; Fu, Xinyi; Lu, Qi; Kang, Karen Yixin",
        journal: "Internet of Things for Smart Environments",
        year: 2022,
        link: "#",
        doi: "https://doi.org/10.1007/978-3-031-09729-4_6",
        images: [
            "./images/publications/multimodal-smart-env-1.png",
            "./images/publications/multimodal-smart-env-2.png",
            "./images/publications/multimodal-smart-env-3.png"
        ],
        bibtex: `@incollection{liu2022design,
  title={Design Strategy of Multimodal Perception System for Smart Environment},
  author={Liu, Jie and Luo, Dan and Fu, Xinyi and Lu, Qi and Kang, Karen Yixin},
  booktitle={Internet of Things for Smart Environments},
  pages={93--115},
  year={2022},
  publisher={Springer International Publishing Cham}
}`
    },
    {
        title: "Design research and practice on odor recognition devices in smart home",
        authors: "Lu, Q; Zhang, Y; Sun, YC; et al.",
        journal: "Packaging Engineering",
        year: 2022,
        link: "#",
        publisher: "https://www.nstl.gov.cn/paper_detail.html?id=4bb2a87948396c076a63288355345e46",
        images: [
            "./images/publications/smart-home-odor-2.png",
            "./images/publications/smart-home-odor-3.png"
        ],
        bibtex: `@article{lu2022design,
  title={Design research and practice on odor recognition devices in smart home},
  author={LU, Q and ZHANG, Y and SUN, YC and others},
  journal={Packaging Engineering},\
  volume={43},
  number={16},
  pages={27--36},
  year={2022}
}`
    },
    {
        title: "Application of Intelligent Olfactory Perception in Home Design",
        authors: "Lu Qi; Yang Jiawei",
        journal: "Zhuangshi",
        year: 2022,
        link: "#",
        publisher: "https://qikan.cqvip.com/Qikan/Article/Detail?id=00002EGG597G7JP0MLDO0JP1MFR",
        images: [
            "./images/publications/home-design-olfactory-1.png",
            "./images/publications/home-design-olfactory-3.png"
        ],
        bibtex: `@article{lu2022application,
  title={Application of Intelligent Olfactory Perception in Home Design},
  author={Lu, Qi and Yang, Jiawei},
  journal={Zhuangshi},
  number={09},
  pages={34--38},
  year={2022},
  issn={0412-3662},
  doi={10.16272/j.cnki.cn11-1392/j.2022.09.006}
}`
    },
    {
        title: "Exploring potential scenarios and design implications through a camera-like physical odor capture prototype",
        authors: "Lu, Qi; Liang, Wan; Wu, Hao; Wong, Hoiian; Mi, Haipeng; Xu, Yingqing",
        journal: "Proceedings of the 2020 ACM Designing Interactive Systems Conference",
        year: 2020,
        link: "#",
        doi: "https://doi.org/10.1145/3357236.3395434",
        images: [
            "./images/publications/odor-capture-1.png",
            "./images/publications/odor-capture-2.png",
            "./images/publications/odor-capture-3.png",
            "./images/publications/odor-capture-4.png"
        ],
        bibtex: `@inproceedings{lu2020exploring,
  title={Exploring potential scenarios and design implications through a camera-like physical odor capture prototype},
  author={Lu, Qi and Liang, Wan and Wu, Hao and Wong, Hoiian and Mi, Haipeng and Xu, Yingqing},
  booktitle={Proceedings of the 2020 ACM Designing Interactive Systems Conference},
  pages={2021--2033},
  year={2020}
}`
    },
    {
        title: "A Visual Analytics Framework for Interactively Clustering Scent Data",
        authors: "Huang, Li; Zhang, Jingyi; Wu, Hao; Lu, Qi",
        journal: "Journal of Computer-Aided Design & Computer Graphics",
        year: 2020,
        link: "#",
        publisher: "https://www.jcad.cn/en/article/doi/10.3724/SP.J.1089.2020.18348.z49",
        images: [
            "./images/publications/visual-analytics-1.png",
            "./images/publications/visual-analytics-2.png",
            "./images/publications/visual-analytics-3.png"
        ],
        bibtex: `@article{huang2020visual,
  title={A Visual Analytics Framework for Interactively Clustering Scent Data},
  author={Huang, Li and Zhang, Jingyi and Wu, Hao and Lu, Qi},
  journal={Journal of Computer-Aided Design \\& Computer Graphics},
  volume={32},
  number={7},
  pages={1026--1041},
  year={2020}
}`
    },
    {
        title: "Exploration of Olfactory Input Interface Based on Smell Capture",
        authors: "Lu, Qi; Wu, Hao; Liang, Wan; Jia, Yanhong; Yang, Jiawei",
        journal: "Journal of Computer-Aided Design & Computer Graphics",
        year: 2020,
        link: "#",
        publisher: "https://www.jcad.cn/en/article/doi/10.3724/SP.J.1089.2020.18347.z49",
        images: [
            "./images/publications/smell-capture.png"
        ],
        bibtex: `@article{lu2020exploration,
  title={Exploration of Olfactory Input Interface Based on Smell Capture},
  author={Lu, Qi and Wu, Hao and Liang, Wan and Jia, Yanhong and Yang, Jiawei},
  journal={Journal of Computer-Aided Design \\& Computer Graphics},
  volume={32},
  number={7},
  pages={1018--1025},
  year={2020}
}`
    },
    {
        title: "Irelics: Designing a tangible interaction platform for the popularization of field archaeology",
        authors: "Lu, Qi; Ma, Shao-en; Li, Jiayin; Mi, Haipeng; Xu, Yingqing",
        journal: "Proceedings of the Thirteenth International Conference on Tangible, Embedded, and Embodied Interaction",
        year: 2019,
        link: "https://dl.acm.org/doi/epdf/10.1145/3294109.3295647",
        doi: "https://doi.org/10.1145/3294109.3295647",
        images: [
            "./images/publications/irelics-1.png",
            "./images/publications/irelics-2.png",
            "./images/publications/irelics-3.png"
        ],
        bibtex: `@inproceedings{lu2019irelics,
  title={Irelics: Designing a tangible interaction platform for the popularization of field archaeology},
  author={Lu, Qi and Ma, Shao-en and Li, Jiayin and Mi, Haipeng and Xu, Yingqing},
  booktitle={Proceedings of the Thirteenth International Conference on Tangible, Embedded, and Embodied Interaction},
  pages={45--54},
  year={2019}
}`
    }
];

// Team Data - Only Current Team (NO Alumni)
const teamData = {
    current: [
        { name: 'Yingqing Xu', role: 'Professor', link: '#', image: './images/team/xu-yingqing.png' },
        { name: 'Qi Lu', role: 'Assistant Professor', link: '#', image: './images/team/lu-qi.png' },
        { name: 'Jiawei Yang', role: 'Assistant Professor', link: '#', image: './images/team/yang-jiawei.png' },
        { name: 'Yiyong Ma', role: 'Research Assistant', link: '#', image: './images/team/ma-yiyong.png' },
        { name: 'Yang Lan', role: 'Research Assistant', link: '#', image: './images/team/lan-yang.png' },
        { name: 'Tao Guo', role: 'Research Assistant', link: '#', image: './images/team/guo-tao.png' },
        { name: 'Yuchi Sun', role: 'PhD Student', link: '#', image: './images/team/sun-yuchi.png' },
        { name: 'Gang Yu', role: 'PhD Student', link: '#', image: './images/team/yu-gang.png' },
        { name: 'Zhihong Li', role: 'PhD Student', link: '#', image: './images/team/li-zhihong.png' },
        { name: 'Yu Zhang', role: 'PhD Student', link: '#', image: './images/team/zhang-yu.png' }
    ]
};