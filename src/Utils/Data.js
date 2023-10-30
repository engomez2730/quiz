export const questions = [
  {
    question:
      "How easy is to implement policies and procedures in your organization?",
    options: ["Easy", "Moderately easy", "Takes time and effort ", "Madrid"],
    type: "multipleChoice",
  },
  {
    question: "Do you have a person appointed in an IT function?",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "Do you have a cybersecurity strategy in place (i.e. protect your data, control access, backup)?",
    type: "text",
  },
  {
    question:
      "Do your  understand what is the worst case scenario in case of a malicious attack to your network/information? ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "How many of your key business processes rely on internet/IT technology to be executed? ",
    type: "text",
  },
  {
    question:
      "Does the organization have implemented a cybersecurity policy, or defined cybersecurity guidelines (by emails, memo) for the employees to follow?",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "Do you know how many applications, systems, and databases are currently active in your organization?",
    options: ["Yes", "No"],

    type: "multipleChoice",
  },
  {
    question:
      "Do you know the roles/person with access (and type of access) to those applications, systems, and databases?",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "How many hardware are currently active (connected to the network): laptops, desktops, phones, routers,  modems, servers, other devices?",
    type: "text",
  },
  {
    question:
      "It is your corporate network access protected by a key (password)? ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "It is your network segmented - network for financial/sensitive processes is separated from operational/employee network?",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "Can your clients and suppliers connect to your corporate network when they visit your company's premise? ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "If you have servers and databases - how many people have administrative access (i.e. can change settings)? ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "Are you capturing/storing personal private information to perform business processes? (i.e. From clients, contracts)",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "Is your organization using Windows as operating system? If so, it under license? ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question: "Is your organization storing data in the cloud? ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "If you have routers and modem, how many people has access to change their configuration? ",
    type: "text",
  },
  {
    question:
      "There is a formal process to grant and remove employee access to system and application? ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "What is the maximum time to deactivate an account once an employee has left the company?",
    type: "text",
  },
  {
    question:
      "It is there any encryption/protection method to transmit information sent outside your organization?",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "Does the email platform used by the company requires Multi-Factor Authentication to grant access? (i.e. password and a code sent to a phone) ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "For those software's (applications) with licenses, are they being updated when is required?",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "Are there controls in place to ensure that confidential information(finance, contract, customers, employees) is only known by the relevant role/person?",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      'Has the organization being exposed to security training in the last 2 years? "?',
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      'Can employees connect their personal phones (or other devices) to the corporate network? "?',
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "Is the information about your company, other companies and individual sensitive enough that its disclosure to the public may cause major damage to the reputation of your company? ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "Does your organization tracks the flow of people that has access to your company premises in a given day? ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "Does the organization has active antivirus software in the network/individual devices?  ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "Are software acquired in the market or developed in house to fit the company needs?  ",
    options: ["Market ", "In-house"],
  },
  {
    question:
      "When software are acquired in the market, are guarantees and post sale services part of the agreement? ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "It is there a process/protocol to apply when suspicious activity is detected in the network (phishing attack, stolen data)?  ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "Do you perform periodic review on system and application to detect inadequate access to them?",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "Can you detect in any given moment how many devices are connected to your corporate network?  ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "Do you have any Intrusion Detection System (IDS)/Intrusion Prevention System (IPS) installed in your network? ? ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "There are system log in installed in the main applications and system (audit trail)?  ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "Does the organization have installed any automatic security solution (scanner, security incident event monitoring)  ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "Has the organization undergone a security vulnerability scanner in the last year?  ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "In the past 6 months has your company been a target of phishing attack (social engineering)?   ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "When incidents occur, does your organization follow a process to understand the root cause and how to mitigate them? ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      "Do you understand which are the key processes in your business and can safely restore the data in case of a security incident? (caused unintentionally by an employee or as a result of a malicious attack) ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question: "Is there a database to store key information? ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question: " How often is a backup made? ",
    type: "text",
  },
  {
    question:
      "Are you able to restore operation in 48 hours in case that data stored in system and application is not available? Meaning, can you restore your key data quickly enough to avoid business disruption (process payment, send email, send invoices/other documents) for more than 2 working days. ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      " Is your insurance policy covering any of the risk associated with making business online? ? ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  {
    question:
      " Do you know how much you may have to invest to restore your system   to normal operations in case of a major cyber incident (loss of data due to a malicious attack for example or due to an error)?  ",
    options: ["Yes", "No"],
    type: "multipleChoice",
  },
  // Add more questions here
];
