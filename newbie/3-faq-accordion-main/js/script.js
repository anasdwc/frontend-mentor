document.addEventListener('alpine:init', () => {
    Alpine.data('accordionSingle', () => ({
        // Prop
        show: null,
        // Method
        setIndex(ele) {
            const dataIndex = parseInt(ele.parentElement.dataset.index);
            this.show = dataIndex;
        },
    }));
});
