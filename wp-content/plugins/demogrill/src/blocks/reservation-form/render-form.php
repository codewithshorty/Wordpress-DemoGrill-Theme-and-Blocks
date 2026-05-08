<?php
ob_start();
?>

<section id="reservation" class="relative bg-[#f8f5f0]">

    <!-- TOP WHITE STRIP -->
    <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div class="h-24 bg-white"></div>
    </div>

    <!-- CONTAINER -->
    <div class="relative mx-auto max-w-3xl px-6 sm:px-8 py-16">

        <!-- CARD -->
        <div class="rounded-[20px] bg-white border border-black/5 shadow-xl p-6 sm:p-10">

            <!-- HEADER -->
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                <div>
                    <h2 class="text-3xl tracking-tight font-bold text-black">
                        Reserve Your Table
                    </h2>

                    <p class="mt-2 text-gray-600">
                        We’ll hold your reservation for 15 minutes.
                    </p>
                </div>

                <div class="hidden sm:flex flex-col items-end text-sm text-gray-500">
                    <span>Or call us</span>

                    <a
                        href="tel:+381600000000"
                        class="font-semibold text-orange-600 hover:underline">
                        +381 60 000 000
                    </a>
                </div>

            </div>

            <!-- FORM -->
            <form id="reservation-form"
                class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5">

                <!-- NAME -->
                <div class="sm:col-span-2">

                    <label class="block text-sm font-medium text-gray-700">
                        Full Name
                    </label>

                    <input
                        type="text"
                        name="user_name"
                        placeholder="John Doe"
                        class="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />

                </div>

                <!-- PHONE -->
                <div>

                    <label class="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>

                    <input
                        type="tel"
                        name="phone"
                        placeholder="+381..."
                        class="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />

                </div>

                <!-- GUESTS -->
                <div>

                    <label class="block text-sm font-medium text-gray-700">
                        Guests
                    </label>

                    <input
                        type="number"
                        name="number_of_reservations"
                        placeholder="2"
                        min="1"
                        class="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />

                </div>

                <!-- DATE -->
                <div>

                    <label class="block text-sm font-medium text-gray-700">
                        Reservation Date
                    </label>

                    <input
                        type="date"
                        name="reservation_date"
                        class="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />

                </div>

                <!-- TIME -->
                <div>

                    <label class="block text-sm font-medium text-gray-700">
                        Reservation Time
                    </label>

                    <input
                        type="time"
                        name="time"
                        class="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-400" />

                </div>

                <!-- BUTTON -->
                <div class="sm:col-span-2 flex flex-col sm:flex-row gap-3 mt-2">

                    <button
                        class="reservation-button inline-flex items-center justify-center gap-2 rounded-full bg-black text-white px-6 py-3 font-medium hover:bg-neutral-800 transition"
                        type="submit">
                        Reserve Table
                    </button>

                    <div
                        class="spinner hidden items-center justify-center">
                        <svg
                            class="animate-spin w-6 h-6 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                        </svg>
                    </div>

                    <p class="message text-sm text-gray-600 flex items-center"></p>

                </div>

            </form>

        </div>
    </div>
</section>

<?php
echo ob_get_clean();
?>