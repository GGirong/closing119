<template>
    <div class="footer-widget mb-0">
        <h4 class="footer-widget__title">{{ contactWidgetData.widgetTitle }}</h4>
        <div class="footer-widget__content">
            <p class="address"></p>
            <ul class="contact-details">
                <li>
                    P: 1800-7886
                </li>
                <li>
                    E: jae037@with365.co.kr
                </li>
                <li>
                    F: 02-3461-7886
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['contactWidgetData']
    };
</script>