// Mock data for the library management system

export const books = [
  {
    id: 1,
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    subject: "Programming",
    isbn: "978-0132350884",
    price: 2499,
    description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees.",
    totalCopies: 5,
    availableCopies: 3,
    issuedCopies: 2
  },
  {
    id: 2,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt & David Thomas",
    subject: "Programming",
    isbn: "978-0201616224",
    price: 1899,
    description: "Your journey to mastery in software development.",
    totalCopies: 3,
    availableCopies: 1,
    issuedCopies: 2
  },
  {
    id: 3,
    title: "Design Patterns: Elements of Reusable Object-Oriented Software",
    author: "Gang of Four",
    subject: "Programming",
    isbn: "978-0201633612",
    price: 3299,
    description: "Capturing a wealth of experience about the design of object-oriented software.",
    totalCopies: 4,
    availableCopies: 0,
    issuedCopies: 4
  },
  {
    id: 4,
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    subject: "Programming",
    isbn: "978-0596517748",
    price: 1599,
    description: "Most programming languages contain good and bad parts.",
    totalCopies: 6,
    availableCopies: 4,
    issuedCopies: 2
  }
];

export const members = [
  {
    id: 1234,
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+91 9876543210",
    joinDate: "2023-01-15",
    status: "active",
    paymentStatus: "current",
    lastPayment: "2025-07-30",
    nextDueDate: "2025-08-30",
    booksIssued: 2,
    outstandingFines: 0,
    membershipExpires: "2025-08-30"
  },
  {
    id: 1235,
    name: "Alice Smith",
    email: "alice.smith@email.com",
    phone: "+91 9876543211",
    joinDate: "2025-07-28",
    status: "active",
    paymentStatus: "current",
    lastPayment: "2025-07-28",
    nextDueDate: "2025-08-28",
    booksIssued: 1,
    outstandingFines: 0,
    membershipExpires: "2025-08-28"
  },
  {
    id: 1025,
    name: "Robert Johnson",
    email: "robert.j@email.com",
    phone: "+91 9876543212",
    joinDate: "2024-03-10",
    status: "overdue",
    paymentStatus: "overdue",
    lastPayment: "2025-06-03",
    nextDueDate: "2025-07-03",
    booksIssued: 2,
    outstandingFines: 140,
    membershipExpires: "2025-07-03"
  },
  {
    id: 1087,
    name: "Maria Garcia",
    email: "maria.garcia@email.com",
    phone: "+91 9876543213",
    joinDate: "2024-02-20",
    status: "overdue",
    paymentStatus: "overdue",
    lastPayment: "2025-06-20",
    nextDueDate: "2025-07-20",
    booksIssued: 1,
    outstandingFines: 80,
    membershipExpires: "2025-07-20"
  }
];

export const bookCopies = [
  {
    id: "001",
    bookId: 1,
    rackLocation: "Rack 2",
    condition: "Good",
    status: "available",
    addedDate: "2023-01-15",
    lastBorrowed: "2025-07-10"
  },
  {
    id: "002",
    bookId: 1,
    rackLocation: "Rack 2",
    condition: "Excellent",
    status: "available",
    addedDate: "2023-01-15",
    lastBorrowed: "Never"
  },
  {
    id: "003",
    bookId: 1,
    rackLocation: "Rack 2",
    condition: "Good",
    status: "available",
    addedDate: "2024-03-10",
    lastBorrowed: "2025-06-05"
  },
  {
    id: "004",
    bookId: 1,
    rackLocation: "Rack 2",
    condition: "Good",
    status: "issued",
    addedDate: "2023-01-15",
    issuedTo: "John Doe (LIB001234)",
    issueDate: "2025-08-03",
    dueDate: "2025-08-10"
  },
  {
    id: "005",
    bookId: 1,
    rackLocation: "Rack 2",
    condition: "Good",
    status: "issued",
    addedDate: "2023-01-15",
    issuedTo: "Alice Smith (LIB001235)",
    issueDate: "2025-07-29",
    dueDate: "2025-08-05"
  }
];

export const issueHistory = [
  {
    id: 1,
    bookId: 1,
    bookTitle: "Clean Code: A Handbook of Agile Software Craftsmanship",
    bookAuthor: "Robert C. Martin",
    memberId: 1234,
    memberName: "John Doe",
    copyId: "004",
    issueDate: "2025-08-03",
    dueDate: "2025-08-10",
    returnDate: null,
    status: "current",
    fineAmount: 0,
    daysRemaining: 7
  },
  {
    id: 2,
    bookId: 2,
    bookTitle: "The Pragmatic Programmer",
    bookAuthor: "Andrew Hunt & David Thomas",
    memberId: 1235,
    memberName: "Alice Smith",
    copyId: "003",
    issueDate: "2025-08-01",
    dueDate: "2025-08-08",
    returnDate: null,
    status: "current",
    fineAmount: 0,
    daysRemaining: 5
  },
  {
    id: 3,
    bookId: 3,
    bookTitle: "Design Patterns: Elements of Reusable Object-Oriented Software",
    bookAuthor: "Gang of Four",
    memberId: 1025,
    memberName: "Robert Johnson",
    copyId: "007",
    issueDate: "2025-07-15",
    dueDate: "2025-07-22",
    returnDate: "2025-08-01",
    status: "returned_late",
    fineAmount: 50,
    daysOverdue: 10
  }
];

export const overdueBooks = [
  {
    id: 1,
    bookTitle: "Design Patterns: Elements of Reusable Object-Oriented Software",
    bookAuthor: "Gang of Four",
    memberId: 1025,
    memberName: "Robert Johnson",
    copyId: "007",
    dueDate: "2025-07-15",
    daysOverdue: 19,
    priority: "critical",
    fineAmount: 95
  },
  {
    id: 2,
    bookTitle: "The Pragmatic Programmer",
    bookAuthor: "Andrew Hunt & David Thomas",
    memberId: 1087,
    memberName: "Maria Garcia",
    copyId: "003",
    dueDate: "2025-07-18",
    daysOverdue: 16,
    priority: "critical",
    fineAmount: 80
  }
];

export const paymentHistory = [
  {
    id: 1,
    memberId: 1025,
    memberName: "Robert Johnson",
    type: "fee_and_fine",
    amount: 640,
    method: "cash",
    date: "2025-08-03",
    receiptNumber: "RCP202508030001",
    description: "Monthly Fee + Fine"
  },
  {
    id: 2,
    memberId: 1087,
    memberName: "Maria Garcia",
    type: "fine",
    amount: 80,
    method: "cash",
    date: "2025-08-03",
    receiptNumber: "RCP202508030002",
    description: "Fine Payment"
  }
];

export const racks = [
  {
    id: 1,
    name: "Rack 1",
    capacity: 80,
    totalBooks: 65,
    availableBooks: 42,
    issuedBooks: 23,
    utilization: 81,
    subjects: [
      { name: "Programming", count: 25 },
      { name: "Science", count: 20 },
      { name: "Mathematics", count: 15 },
      { name: "Other", count: 5 }
    ]
  },
  {
    id: 2,
    name: "Rack 2",
    capacity: 80,
    totalBooks: 58,
    availableBooks: 35,
    issuedBooks: 23,
    utilization: 72,
    subjects: [
      { name: "Programming", count: 30 },
      { name: "Business", count: 15 },
      { name: "Arts", count: 13 }
    ]
  }
];

export const subjects = [
  "Programming",
  "Science",
  "Mathematics",
  "Literature",
  "History",
  "Philosophy",
  "Business",
  "Arts",
  "Other"
];

export const libraryStats = {
  totalBooks: 247,
  totalCopies: 456,
  availableCopies: 158,
  currentlyIssued: 89,
  totalMembers: 45,
  activeMembers: 38,
  overdueBooks: 8,
  totalFines: 485,
  monthlyRevenue: 18450,
  rackLocations: 8
};