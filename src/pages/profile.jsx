// pages/profile.js
import { useEffect, useState } from "react";
import { auth } from "@/lib/firebase";
import { onAuthStateChanged, signOut, sendEmailVerification } from "firebase/auth";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import RootLayout from "@/components/RootLayout";
import { pathname } from "@/routes/routes.index";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [verificationSent, setVerificationSent] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push(pathname.login);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleSendVerificationEmail = async () => {
    if (user && !user.emailVerified) {
      try {
        await sendEmailVerification(user);
        setVerificationSent(true);
        toast.success("Verification email sent! Please check your inbox.");
      } catch (error) {
        console.error("Error sending verification email:", error);
        toast.error("Failed to send verification email. Try again.");
      }
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-medium">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg font-medium text-red-500">
          You are not logged in. Please log in to view your profile.
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Profile</h2>
        <div className="mb-4">
          <p className="text-lg">
            <strong>Name:</strong> {user.displayName || "Not Set"}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg">
            <strong>Email:</strong> {user.email}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-lg">
            <strong>Email Verified:</strong>{" "}
            {user.emailVerified ? (
              <span className="text-green-500">Yes</span>
            ) : (
              <span className="text-red-500">No</span>
            )}
          </p>
          {!user.emailVerified && !verificationSent && (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-blue-600"
              onClick={handleSendVerificationEmail}
            >
              Send Verification Email
            </button>
          )}
          {verificationSent && (
            <p className="text-sm text-green-500 mt-2">
              Verification email sent! Check your inbox.
            </p>
          )}
        </div>
        <div className="text-center">
          <button
            className="bg-red-500 px-5 py-2 rounded-md text-white hover:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

Profile.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};