export const questions = [
  {
    question:
      "How easy is to implement policies and procedures in your organization?",
    options: ["Easy", "Moderately easy", "Takes time and effort"],
    type: "multipleChoice",
    isScore: false,
  },
  {
    question: "Do you have a person appointed in an IT function?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Do you have a cybersecurity strategy in place (i.e. protect your data, control access, backup)?",
    type: "text",
    isScore: false,
  },
  {
    question:
      "Do you understand what is the worst-case scenario in case of a malicious attack to your network/information?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "How many of your key business processes rely on internet/IT technology to be executed?",
    type: "text",
    isScore: false,
  },
  {
    question:
      "Does the organization have implemented a cybersecurity policy, or defined cybersecurity guidelines (by emails, memo) for the employees to follow?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Do you know how many applications, systems, and databases are currently active in your organization?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Do you know the roles/person with access (and type of access) to those applications, systems, and databases?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },

  {
    question:
      "How many devices are currently active (connected to the network): laptops, desktops, phones, routers, modems, servers, other devices?",
    type: "text",
    isScore: false,
  },

  {
    question: "Is your corporate network protected by a key (password)?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Is your network segmented - network for financial/sensitive processes is separated from operational/employee network?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Can your clients and suppliers connect to your main network when they visit your company's premise?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "If you have servers and databases - how many people have administrative access (i.e. can change settings)?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Are you capturing/storing personal private information to perform business processes? (i.e. From clients, contracts)",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Is your organization using Windows as operating system? If so, is it under license?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Is your organization storing data in the cloud, or uses applications hosted in the cloud ?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "If you have routers and modems, how many people have access to change their configuration?",
    type: "text",
    isScore: false,
  },
  {
    question:
      "Is there a formal process to grant and remove employee access to systems and applications?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "What is the maximum time (in days) to deactivate an account once an employee has left the company?",
    type: "text",
    isScore: false,
  },
  {
    question:
      "Is there any encryption/protection method to transmit information sent outside your organization?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Does the email platform used by the company require Multi-Factor Authentication to grant access? (i.e. password and a code sent to a phone)",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Are softwares and systems being updated when patches become available?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Are there controls in place to ensure that confidential information (finance, contracts, customers, employees) is only known by the relevant role/person?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Has the organization been exposed to information security training in the last 2 years?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Can employees connect their personal phones (or other devices) to the corporate network?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Is the information managed in your company sensitive enough that its disclosure to the public may cause major damage to its reputation ?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Does your organization track the flow of people that have access to your company premises in a given day?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Does the organization have active antivirus software in the network/individual devices?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Are software acquired in the market or developed in-house to fit the company needs?",
    options: ["Market", "In-house", "Both"],
    isScore: false,
  },
  {
    question:
      "When software is acquired in the market, are guarantees and post-sale services part of the agreement?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Is there a process/protocol to apply when suspicious activity is detected in the network (phishing attack, stolen data)?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Do you perform periodic reviews on systems and applications to detect inadequate access to them?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Can you detect at any given moment how many devices are connected to your corporate network?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Do you have any Intrusion Detection System (IDS)/Intrusion Prevention System (IPS) installed in your network?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Are system login installed in the main applications and system (audit trail)?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Does the organization have installed any automatic security solution (scanner, security incident event monitoring)?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Has the organization undergone a security vulnerability scanner in the last year?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "In the past 6 months, has your company been a target of a phishing attack (social engineering)?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "When incidents occur, does your organization follow a process to understand the root cause and how to mitigate them?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Do you understand the key processes in your business and can data be restored in case of a security incident? (caused unintentionally by an employee or as a result of a malicious attack)",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question: "Is there a database to store key information?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Are you able to restore operation in 48 hours in case that data stored in systems and applications is not available? Meaning, can you restore your key data quickly enough to avoid business disruption (process payment, send email, send invoices/other documents) for more than 2 working days.",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Is your insurance policy covering any of the risks associated with making business online?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question:
      "Do you know how much you may have to invest to restore your system to normal operations in case of a major cyber incident (loss of data due to a malicious attack, for example, or due to an error)?",
    options: ["Yes", "No"],
    type: "multipleChoice",
    isScore: true,
  },
  {
    question: "How often is a backup made?",
    type: "text",
    isScore: false,
  },
];
