## Take-Home Assignment: Calendar App Screens

**Objective:** Build two screens of a calendar app based on the provided design. The focus is on clean, efficient code, user experience, and understanding of mobile development principles.

[Figma Link](https://www.figma.com/design/9vi0cy3eaMhFthS9YSDKZ5/take-home?node-id=0-1&t=6yxBuuXYJS7TWZuT-1)

### Design Overview:

#### Screen 1 - Weekly Overview:

Displays the current week with 7 days at the top.
Below the dates, there's a list of upcoming calendar events with visual indicators for event types, time, and duration. Each event displays the title, description, and attendee avatars.
Includes functionality to indicate the "Today" status and remaining time for each event.

#### Screen 2 - Event Detail View:

Displays detailed information about the selected event, including time, title, description, and attendee list.
Shows a breakdown of agenda items with respective times.

### Expected Deliverables:

A functional prototype of the two screens.
A brief explanation of your approach and any challenges faced.
The source code in a GitHub repository.

### Evaluation Criteria

**Code Quality:** Clean, modular, and well-commented code.
**UI/UX Accuracy:** Adherence to the provided design and responsiveness.
**Technical Choices:** Justification for chosen frameworks, libraries, and design patterns.
**Functionality:** Smooth and correct navigation and interaction between screens.
**Documentation:** A clear explanation of the approach, challenges, and possible improvements.

## Solution

I chose Expo for this project because it simplifies setup and provides essential tools that allow for fast prototyping and easy testing. The project didn’t require complex navigation or native integrations, making Expo the perfect fit. To keep the app lightweight, I intentionally did not use external packages and built components like the bottom sheet from scratch. This approach helps reduce app size when bundling and gives me more control over configurations and behavior, avoiding the potential bloat of third-party libraries. I structured my app using a component-based architecture to ensure modularity and maintainability, with no navigation needed as the requirements were limited to a simple 2-page design and a custom bottom sheet for interaction

### Explanation of the Approach

1. **Custom-Built Components for Flexibility and Performance**:

   - The app was designed to avoid using heavy external packages to maintain a lightweight build and full control over component behavior. For example, instead of relying on pre-built bottom sheet libraries, a `CustomBottomSheet` was implemented from scratch. This not only minimizes the app size but also provides better customization tailored to the app's specific needs.

2. **Efficient Layout and Styling**:

   - The layout utilizes `SafeAreaView`, `View`, and custom reusable components like `DateComp` and `ButtonComp` to structure the app in a clean, modular way. This ensures a consistent design across different parts of the app and simplifies maintenance.
   - Styles are carefully crafted to optimize the UI for different screen dimensions, making use of React Native’s `Dimensions` API for responsive design.

3. **Reusable Utility Functions**:

   - Utility functions such as `getMonth`, `getWeekDays`, and `generateUniqueKey` are included to modularize code and enhance reusability, improving the readability and maintainability of the codebase.

4. **Efficient Asset Management**:

   - Images and icons are efficiently managed using the `Avatar` component from `@rneui/themed` and `react-native-vector-icons`, providing a visually appealing and responsive interface.

5. **Minimal Dependencies**:
   - The app avoids heavy reliance on third-party packages, enhancing performance and reducing potential issues with versioning and updates. This approach allows more precise control over configurations and reduces the final bundle size.

### Challenges Faced

1. **Building a Custom Bottom Sheet**:

   - Constructing a custom bottom sheet without relying on established libraries presented challenges such as ensuring smooth animations, handling user gestures seamlessly, and implementing snap points for better UX.
   - This required a deep understanding of React Native's `Animated` API and `react-native-gesture-handler` for gesture handling.

2. **Maintaining Performance**:

   - Ensuring the app remained performant while manually managing animations and gestures without third-party optimization was challenging. Efficient use of native methods and memory management was crucial to avoid lag or UI stutters.

3. **Responsiveness Across Devices**:

   - Adjusting the UI to work on various screen sizes required careful use of `Dimensions` and responsive design practices. This involved testing the app on multiple devices and tweaking layout properties to ensure consistency.

4. **Managing Asset and State Consistency**:
   - Handling the state for components like `CustomBottomSheet` and ensuring a consistent appearance with dynamic data was a complex task. Achieving this while keeping components decoupled and reusable required thoughtful architecture.

### Possible Improvements

1. **Refactoring State Management**:

   - Integrating a centralized state management library like Zustand or Recoil could make state handling more scalable as the app grows. This would help manage complex state dependencies across components without adding significant weight.

2. **Optimizing Custom Animations**:

   - While building animations from scratch offers flexibility, incorporating libraries like `Reanimated` could provide smoother, more efficient animations that leverage native performance without compromising on bundle size.

3. **Accessibility Enhancements**:

   - Improving accessibility features, such as better focus management and screen reader support, could be beneficial for enhancing the app’s usability for all users.

4. **Code Splitting and Lazy Loading**:

   - Implementing code-splitting techniques for non-essential components like `DetailSheet` would reduce the initial load time, making the app faster and more efficient.

5. **Extended Testing**:
   - Enhancing test coverage with unit tests for custom components and integration tests to ensure the custom-built bottom sheet and other UI elements behave correctly under various conditions.

In summary, the approach focused on modular and custom-built solutions to maintain a lightweight app while ensuring flexibility and control over UI/UX elements. Challenges included creating custom components from scratch and ensuring smooth performance. Improvements could include optimizing state management and leveraging libraries that enhance animation performance without adding significant weight.
