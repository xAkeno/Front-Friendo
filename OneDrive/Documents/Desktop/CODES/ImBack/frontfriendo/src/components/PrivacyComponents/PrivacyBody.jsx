import React from 'react'

const PrivacyBody = () => {
  return (
    <div class="">
        <div class="container mx-auto px-4 py-8">
            <h1 class="text-3xl font-bold mb-4">Privacy Policy</h1>

            <p class="mb-4">
                This privacy policy sets out how our website uses and protects any information that you give us when you use
                this
                website.
            </p>
            <h2 class="text-2xl font-bold mb-2">Disclaimer</h2>
            <p class="mb-4">
                This website is a project created to showcase my skills and learning journey. For your safety, we strongly recommend that you do not use real personal information when using this site.
            </p>

            <h2 class="text-2xl font-bold mb-2">Information We Collect</h2>

            <p class="mb-4">
                We may collect the following information:
            </p>

            <ul class="list-disc list-inside mb-4">
                <li>Your name and email</li>
                <li>Personal information</li>
            </ul>

            <h2 class="text-2xl font-bold mb-2">Security</h2>

            <p class="mb-4">
                We are committed to keeping your information and account secure. To prevent unauthorized access, we use Spring Security to handle authentication and authorization in our application.
            </p>
            <h2>With Spring Security, we:</h2>
            <ul className='[&>li]:list-disc [&>li]:ml-4 pl-4'>
                <li>Authenticate users safely using password hashing and token-based methods like JWT.</li>
                <li>Verify each request independently to ensure only authorized access.</li>
                <li>Control access to application resources based on user roles and permissions.</li>
            </ul>
            <h2 class="text-2xl font-bold mb-2">Cookies</h2>

            <p class="mb-4">
                A cookie is a small file stored on your computer that helps identify you when you use our app. In our system, we use cookies to store a user ID, which allows you to make authenticated requests without needing to log in repeatedly.
            </p>
            <p>To keep your information safe, the cookie is set with security measures:</p>
            <ul className='pl-4 [&>li]:list-disc [&>li]:ml-4 mb-4'>
                <li>It is marked HttpOnly, so it cannot be accessed by malicious scripts, helping prevent theft by hackers.</li>
                <li>It has the SameSite attribute enabled, which protects against Cross-Site Scripting (XSS) attacks by restricting how cookies are sent with cross-site requests.</li>
            </ul>
            <p className='mb-4'>
                Because this cookie contains your user ID and allows access to your account, we strongly recommend not sharing it with others, as doing so may compromise your account security.
            </p>

            <h2 class="text-2xl font-bold mb-2">Links to Other Websites</h2>
            <p class="mb-4">
                Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
            </p>

            <p class="mb-4">
                This privacy policy is subject to change without notice.
            </p>
        </div>
    </div>
  )
}

export default PrivacyBody
